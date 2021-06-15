import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post, POST_STATUS } from 'src/app/public/post.model';
import { AuthenticationService } from 'src/app/shared/_helpers/authentication.service';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  posts$: Observable<Post[]> = of([]);
  mine: boolean = false;
  userId: string | null;
  constructor(
    private _service: PostService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.userId = auth.getUser();
  }

  ngOnInit(): void {
    this.posts$ = this._service.getRequests();
  }

  onClickDeletePost(post: Post) {
    post.post_status = POST_STATUS.POST_DELETED;
    this._service.deletePost(post);
  }

  onClickMine() {
    this.mine = !this.mine;
    this.posts$ = this.mine
      ? this._service.getMyRequests()
      : this._service.getRequests();
  }

  onClickPray(post: Post) {
    const _userId = this.auth.getUser()?.uid;
    post.prayed = post.prayed || [];
    if (post.prayed?.filter((uid) => uid === _userId)?.length) {
      post.prayed = post.prayed?.filter((uid) => uid !== _userId);
    } else {
      post.prayed?.push(_userId);
    }
    this._service.updatePost(post);
  }

  onClickAnswered(post: Post){
    post.isAnswered = true;
    this._service.updatePost(post);
  }

  isItMine(post: Post) {
    return post.created_by === this.auth.getUser()?.uid;
  }

  onClickDetails(post: Post) {
    this.router.navigateByUrl(`/post/details/${post.id}`);
  }
}
