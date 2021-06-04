import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { SignModule } from './sign/sign.module';
import { PublicRoutingModule } from './public-routing.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root/root.component';
import { StorageService } from '../shared/_helpers/storage.service';



@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PostModule,
    SignModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [
    StorageService
  ]
})
export class PublicModule { }
