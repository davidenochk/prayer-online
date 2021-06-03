import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from 'src/app/shared/dummy-root/dummy-root.component';
import { ForgotComponent } from './forgot/forgot.component';
import { InComponent } from './in/in.component';
import { UpComponent } from './up/up.component';

const routes: Routes = [
  {
    path: "",
    component: DummyRootComponent,
    children: [
      {
        path: 'in',
        pathMatch: 'full',
        loadChildren: () => import('./in/in.module').then(m => m.InModule)
      },
      {
        path: 'up',
        pathMatch: 'full',
        loadChildren: () => import('./up/up.module').then(m => m.UpModule)
        // component: UpComponent
      },
      {
        path: 'forgot',
        pathMatch: 'full',
        component: ForgotComponent
      },
      {
        path: '**',
        redirectTo: 'in'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }
