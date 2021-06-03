import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { RouterModule } from '@angular/router';
import { PostRoutingModule } from './post-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestsComponent } from './components/requests/requests.component';
import { PostService } from './post.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent, RequestsComponent],
  imports: [CommonModule, RouterModule, PostRoutingModule, SharedModule, FormsModule],
  providers: [PostService],
})
export class PostModule {}
