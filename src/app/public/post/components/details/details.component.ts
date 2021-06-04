import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/public/post.model';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  postId: string | null = null;
  post: Post = {};
  constructor(private route: ActivatedRoute, private _service: PostService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = <string>params.get('id');
      this._service.getPostDetails(this.postId).subscribe((_post) => {
        this.post = <Post>_post.data();
      });
    });
  }
}
