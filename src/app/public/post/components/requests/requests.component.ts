import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, POST_STATUS } from 'src/app/public/post.model';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  posts$: Observable<Post[]> = of([]);
  constructor(private _service: PostService) {
  }

  ngOnInit(): void {
    this.posts$ = this._service.getRequests();
  }

  onClickDeletePost(post: Post) {
    post.post_status = POST_STATUS.POST_DELETED;
    this._service.deletePost(post);
  }
}
