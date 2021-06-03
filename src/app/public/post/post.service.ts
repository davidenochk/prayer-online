import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  requests: Observable<unknown[]>;
  postsCollection: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) {
    this.postsCollection = firestore.collection('posts');
    this.requests = this.postsCollection.valueChanges() || [];
  }

  postRequest(post: Post) {
    return this.firestore.collection('posts').doc(post.id).set(post);
  }

  getRequests(): Observable<any[]> {
    return this.requests;
  }

  deletePost(post: Post) {
    return this.postsCollection.doc(post.id).delete();
  }
}
