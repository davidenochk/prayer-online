import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post, POST_STATUS } from '../post.model';
import { PostService } from '../post/post.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requests: Observable<unknown[]>;
  constructor(private firestore: AngularFirestore,
    private postService: PostService) { 
    this.requests = this.firestore.collection("posts").valueChanges();
  }

  getRequests(): Observable<any[]>{
    return this.requests;
  }

  deletePost(post: Post){
    return this.postService.postRequest(post);
  }
}
