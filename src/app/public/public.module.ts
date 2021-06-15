import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { SignModule } from './sign/sign.module';
import { PublicRoutingModule } from './public-routing.module';
import { StorageService } from '../shared/_helpers/storage.service';
import { HomeComponent } from './home/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostService } from './post/post.service';
import { RootModule } from '../root/root.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PostModule,
    SignModule,
    RootModule,
    FlexLayoutModule
  ],
  providers: [
    StorageService,
    PostService
  ]
})
export class PublicModule { }
