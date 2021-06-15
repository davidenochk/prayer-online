import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyRootComponent } from 'src/app/shared/dummy-root/dummy-root.component';
import { MODES } from 'src/app/_models/generic.model';
import { GroupDetailsComponent } from './_components/group-details/group-details.component';
import { GroupListComponent } from './_components/group-list/group-list.component';

const routes: Routes = [
  {
    path: "",
    component: DummyRootComponent,
    children: [
      {
        path: "new",
        component: GroupDetailsComponent,
        data: {
          mode: MODES.Create
        },
        pathMatch: 'full'
      },
      {
        path: "edit/:id",
        component: GroupDetailsComponent,
        data: {
          mode: MODES.Edit
        }
      },
      {
        path: "delete/:id",
        component: GroupDetailsComponent,
        data: {
          mode: MODES.Delete
        }
      },
      {
        path: "view/:id",
        component: GroupDetailsComponent,
        data: {
          mode: MODES.View
        }
      },
      {
        path: "list",
        component: GroupListComponent,
        pathMatch: 'full'
      },
      {
        path: "",
        redirectTo: "list"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
