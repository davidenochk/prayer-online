import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from 'src/app/shared/dummy-root/dummy-root.component';
import { AuthGuard } from 'src/app/shared/_helpers/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { PostComponent } from './components/post/post.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [
  {
    path: '',
    component: DummyRootComponent,
    children: [
      {
        path: '',
        component: PostComponent,
        pathMatch: 'full',
      },
      {
        path: 'requests',
        component: RequestsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
