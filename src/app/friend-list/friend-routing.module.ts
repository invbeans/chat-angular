import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendListComponent } from './friend-list.component';


const routes: Routes = [
  {
    path: '',
    component: FriendListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
