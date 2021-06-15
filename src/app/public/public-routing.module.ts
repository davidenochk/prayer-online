import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: RootComponent,
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
        path: 'home',
        component: HomeComponent
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
