import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list.component';
import { FriendRoutingModule } from './friend-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FriendRoutingModule,
    SharedModule
  ],
  declarations: [FriendListComponent]
})
export class FriendModule { }
