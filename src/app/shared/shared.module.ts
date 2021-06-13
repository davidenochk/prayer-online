import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from "@angular/flex-layout/server";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MessagesService } from './messages/messages.service';
import { BaseComponent } from './base/base.component';
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSnackBarModule,
  MatChipsModule,
  MatDialogModule
]


@NgModule({
  declarations: [
  
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    FlexLayoutModule,
    FlexLayoutServerModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    MessagesService
  ]
})
export class SharedModule { }
