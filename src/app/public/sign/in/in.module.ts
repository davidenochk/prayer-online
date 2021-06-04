import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InComponent } from './in.component';
import { InRoutingModule } from "./in-routing.module";



@NgModule({
  declarations: [
    InComponent
  ],
  imports: [
    CommonModule,
    InRoutingModule
  ],
  exports: [
    InComponent
  ]
})
export class InModule { }
