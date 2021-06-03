import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';
import { RequestsService } from 'src/app/public/requests/requests.service';
import { Post, POST_STATUS } from '../../../post.model';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts$: Observable<any[]>;
  post: Post = {
    id: UUID.UUID(),
    post_status: POST_STATUS.READY_TO_POST,
    text: ""
  };
  constructor(private _service: PostService, private requestsService: RequestsService) {
    this.posts$ = this.requestsService.getRequests();
  }

  ngOnInit(): void {}

  onClickPostRequest(text: string) {
    this.post.text = text;
    this.setPostStatus(POST_STATUS.POSTING);
    this._service
      .postRequest(this.post)
      .then((response) => {
        this.setPostStatus(POST_STATUS.POSTED);
      })
      .catch(err => {
        console.error(err);
        this.setPostStatus(POST_STATUS.POSTING_FAILED)
      });
  }

  setPostStatus(status: POST_STATUS){
    this.post = {
      ...this.post,
      post_status: status
    }
    return this.post;
  }
}
