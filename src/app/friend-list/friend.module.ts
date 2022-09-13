import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list.component';
import { FriendRoutingModule } from './friend-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FriendFeedComponent } from './friend-feed/friend-feed.component';
import { FriendSearchBlockComponent } from './friend-search-block/friend-search-block.component';

@NgModule({
  imports: [
    CommonModule,
    FriendRoutingModule,
    SharedModule
  ],
  declarations: [FriendListComponent, SearchBarComponent, FriendFeedComponent, FriendSearchBlockComponent]
})
export class FriendModule { }
