import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { StorageService } from '../shared/_helpers/storage.service';
import { PostService } from '../public/post/post.service';
import { RootModule } from '../root/root.module';
import { CountWidgetComponent } from './dashboard/components/count-widget/count-widget.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    CountWidgetComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RootModule,
    SharedModule
  ],
  providers: [
    StorageService,
    PostService
  ]
})
export class AdminModule { }
