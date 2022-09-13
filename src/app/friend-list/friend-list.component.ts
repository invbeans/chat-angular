import { Component, OnInit } from '@angular/core';
import { friendList } from '../shared/data/friends-data';
import { IFriend } from '../shared/models/friend';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: IFriend[];
  constructor() { }

  ngOnInit(): void {
    this.friends = friendList;
  }

}
