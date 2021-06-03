import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from '../shared/dummy-root/dummy-root.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: DummyRootComponent,
    children: [
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.PostModule)
      },
      {
        path: 'sign',
        loadChildren: () => import('./sign/sign.module').then(m => m.SignModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
