import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from 'src/app/shared/dummy-root/dummy-root.component';
import { InComponent } from './in.component';

const routes: Routes = [
  {
    path: "",
    component: DummyRootComponent,
    children: [
      {
        path: "",
        component: InComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InRoutingModule { }
