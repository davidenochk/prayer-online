import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { RequestsModule } from './requests/requests.module';
import { SignModule } from './sign/sign.module';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PostModule,
    RequestsModule,
    SignModule
  ]
})
export class PublicModule { }
