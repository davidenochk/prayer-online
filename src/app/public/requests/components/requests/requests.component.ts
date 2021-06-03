import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, POST_STATUS } from 'src/app/public/post.model';
import { RequestsService } from '../../requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  posts$: Observable<any[]>;
  constructor(private _service: RequestsService) {
    this.posts$ = this._service.getRequests();
  }

  ngOnInit(): void {}

  onClickDeletePost(post: Post) {
    post.post_status = POST_STATUS.POST_DELETED;
    this._service.deletePost(post);
  }
}
