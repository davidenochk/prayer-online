import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpComponent } from './up.component';
import { UpRoutingModule } from './up-routing.module';



@NgModule({
  declarations: [
    UpComponent
  ],
  imports: [
    CommonModule,
    UpRoutingModule
  ]
})
export class UpModule { }
