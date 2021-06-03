import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    FlexLayoutModule,
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
