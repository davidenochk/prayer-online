import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignRoutingModule } from './sign-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { InComponent } from './in/in.component';
import { InModule } from './in/in.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignRoutingModule,
    AngularFireAuthModule
  ],
  exports: [
    InModule
  ]
})
export class SignModule { }
