import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list.component';
import { FriendRoutingModule } from './friend-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FriendFeedComponent } from './friend-feed/friend-feed.component';
import { FriendSearchBlockComponent } from './friend-search-block/friend-search-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PfpModalComponent } from './pfp-modal/pfp-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FriendRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FriendListComponent, SearchBarComponent, FriendFeedComponent, FriendSearchBlockComponent, PfpModalComponent]
})
export class FriendModule { }
