import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from 'src/app/shared/dummy-root/dummy-root.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [
  {
    path: "",
    component: DummyRootComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RequestsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
