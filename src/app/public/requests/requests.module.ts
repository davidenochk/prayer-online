import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './components/requests/requests.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule
  ],
  exports: [
    RequestsComponent
  ]
})
export class RequestsModule { }
