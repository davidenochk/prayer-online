import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';
import { Post, POST_STATUS } from '../../../post.model';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts$: Observable<any[]>;
  post: Post = {};
  constructor(private _service: PostService) {
    this.posts$ = this._service.getRequests();
  }

  ngOnInit(): void {
    this.createEmptyPost();
  }

  onClickPostRequest() {
    this.setPostStatus(POST_STATUS.POSTING);
    this._service
      .createPost(this.post)
      .then((response) => {
        this.setPostStatus(POST_STATUS.POSTED);
        this.createEmptyPost();
      })
      .catch((err) => {
        console.error(err);
        this.setPostStatus(POST_STATUS.POSTING_FAILED);
      });
  }

  setPostStatus(status: POST_STATUS) {
    this.post = {
      ...this.post,
      post_status: status,
    };
    return this.post;
  }

  createEmptyPost() {
    this.post = {
      id: UUID.UUID(),
      text: '',
      post_status: POST_STATUS.READY_TO_POST,
    };
  }
}
