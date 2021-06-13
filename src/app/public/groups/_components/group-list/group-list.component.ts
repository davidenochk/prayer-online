import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MessagesService } from 'src/app/shared/messages/messages.service';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';
import { Group, GROUP_STATUS } from 'src/app/_models/group.model';
import { GroupsService } from '../../groups.service';
import { GroupDetailsComponent } from '../group-details/group-details.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups$: Observable<Group[]> = of([]);
  mine: boolean = false;
  userId: string | null;

  constructor(
    private _service: GroupsService,
    private auth: AuthenticationService,
    private router: Router,
    private matDialog: MatDialog) {
      this.userId = auth.getUser(); }

  ngOnInit(): void {
    this.groups$ = this._service.getRequests().pipe(map((groups: Group[]) => {
      return groups.filter(group => group.group_status !== GROUP_STATUS.DELETED)
    }));
  }

  onClickDeleteGroup(group: Group) {
    group.group_status = GROUP_STATUS.DELETED;
    this._service.deleteGroup(group);
  }

  onClickNewGroup(){
    this.matDialog.open(GroupDetailsComponent, {
      minWidth: '400px'
    })
    .afterClosed()
    .subscribe(res => {
      console.log(res);
    })
  }

  onClickMine() {
    this.mine = !this.mine;
    this.groups$ = this.mine
      ? this._service.getMyRequests()
      : this._service.getRequests();
  }

  isItMine(group: Group) {
    return group.created_by === this.auth.getUser()?.uid;
  }

  onClickDetails(group: Group) {
    this.router.navigateByUrl(`/group/details/${group.id}`);
  }

}
