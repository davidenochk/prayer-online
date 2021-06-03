import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.posts = firestore.collection('posts').valueChanges() || [];
  }

  postRequest(post: Post) {
    return this.firestore.collection('posts').doc(post.id).set(post);
  }
}
