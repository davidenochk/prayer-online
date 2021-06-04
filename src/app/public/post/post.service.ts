import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  requests: Observable<unknown[]>;
  postsCollection: AngularFirestoreCollection;
  constructor(
    private firestore: AngularFirestore,
    private auth: AuthenticationService
  ) {
    this.postsCollection = firestore.collection('posts');
    this.requests = this.postsCollection.valueChanges() || [];
  }

  createPost(post: Post) {
    const _post = this.auditPost(post, POST_OPERATION.CREATE);
    return this.firestore.collection('posts').doc(_post.id).set(_post);
  }

  createAnonymousPost(post: Post){
    const _post = this.auditPost(post, POST_OPERATION.CREATE);
  }

  updatePost(post: Post) {
    const _post = this.auditPost(post, POST_OPERATION.UPDATE);
    return this.firestore.collection('posts').doc(_post.id).set(_post);
  }

  getPostDetails(id: string | null){
    return this.postsCollection.doc(<string>id).get();
  }

  getRequests(): Observable<Post[]> {
    return this.requests.pipe(
      map((posts) => <Post[]>posts),
      map((requests: Post[]) => {
        return <Post[]>requests.map(req => {
          return {
            ...req,
            didIPray: !!req.prayed?.find(p => p === this.auth.getUser()?.uid)
          }
        })
      })
    );
  }

  getMyRequests(): Observable<Post[]> {
    return this.requests.pipe(
      map((posts) => <Post[]>posts),
      map((requests: Post[]) => requests.filter(request => request.created_by === this.auth.getUser()?.uid))
    );
  }

  deletePost(post: Post) {
    const _post = this.auditPost(post, POST_OPERATION.DELETE);
    return this.postsCollection.doc(post.id).delete();
  }

  auditPost(
    post: Post,
    operation: POST_OPERATION = POST_OPERATION.UPDATE
  ): Post {
    const _userId = this.auth.user.value?.uid || null;
    switch (operation) {
      case POST_OPERATION.CREATE:
        return {
          ...post,
          created_by: post.created_by || _userId,
          created_at: post.created_at || new Date(),
          updated_at: new Date(),
          updated_by: _userId,
        };
      case POST_OPERATION.UPDATE:
        return {
          ...post,
          updated_at: new Date(),
          updated_by: _userId,
        };
      case POST_OPERATION.DELETE:
        return {
          ...post,
          deleted_at: new Date(),
          deleted_by: _userId,
        };
      default:
        return {
          ...post,
          updated_at: new Date(),
          updated_by: _userId,
        };
    }
  }
}

export enum POST_OPERATION {
  'CREATE' = 'CREATE',
  'UPDATE' = 'UPDATE',
  'DELETE' = 'DELETE',
}
