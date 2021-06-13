import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';
import { OPERATION } from 'src/app/_models/generic.model';
import { Group } from 'src/app/_models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  groups: Observable<unknown[]>;
  groupsCollection: AngularFirestoreCollection;

  constructor(
    private firestore: AngularFirestore,
    private auth: AuthenticationService) {
    this.groupsCollection = firestore.collection('groups');
    this.groups = this.groupsCollection.valueChanges() || [];
  }

  createGroup(group: any) {
    const _group = this.auditGroup(group, OPERATION.CREATE);
    return this.firestore.collection('groups').doc(_group.id).set(_group);
  }

  auditGroup(
    group: any,
    operation: OPERATION = OPERATION.UPDATE
  ): any {
    const _userId = this.auth.user.value?.uid || null;
    switch (operation) {
      case OPERATION.CREATE:
        return {
          ...group,
          created_by: group.created_by || _userId,
          created_at: group.created_at || new Date(),
          updated_at: new Date(),
          updated_by: _userId,
        };
      case OPERATION.UPDATE:
        return {
          ...group,
          updated_at: new Date(),
          updated_by: _userId,
        };
      case OPERATION.DELETE:
        return {
          ...group,
          deleted_at: new Date(),
          deleted_by: _userId,
        };
      default:
        return {
          ...group,
          updated_at: new Date(),
          updated_by: _userId,
        };
    }
  }

  updateGroup(group: Group) {
    const _group = this.auditGroup(group, OPERATION.UPDATE);
    return this.firestore.collection('groups').doc(_group.id).set(_group);
  }

  getGroupDetails(id: string | null){
    return this.groupsCollection.doc(<string>id).get();
  }

  getRequests(): Observable<Group[]> {
    return this.groups.pipe(
      map((groups) => <Group[]>groups)
    );
  }

  getMyRequests(): Observable<Group[]> {
    return this.groups.pipe(
      map((groups) => <Group[]>groups),
      map((requests: Group[]) => requests.filter(request => request.created_by === this.auth.getUser()?.uid))
    );
  }

  deleteGroup(group: Group) {
    const _group = this.auditGroup(group, OPERATION.DELETE);
    return this.groupsCollection.doc(_group.id).delete();
  }
}
