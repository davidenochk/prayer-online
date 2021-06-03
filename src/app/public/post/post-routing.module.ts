import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from 'src/app/shared/dummy-root/dummy-root.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: "",
    component: DummyRootComponent,
    children: [
      {
        path: "",
        component: PostComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
