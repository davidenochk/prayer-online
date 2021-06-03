import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from 'src/app/shared/dummy-root/dummy-root.component';
import { ForgotComponent } from './forgot.component';

const routes: Routes = [
  {
    path: "",
    component: DummyRootComponent,
    children: [
      {
        path: "",
        component: ForgotComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotRoutingModule { }
