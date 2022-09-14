import { Component, Input, OnInit } from '@angular/core';
import { IFriend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-friend-search-block',
  templateUrl: './friend-search-block.component.html',
  styleUrls: ['./friend-search-block.component.css']
})
export class FriendSearchBlockComponent implements OnInit {
  @Input() friend: IFriend;
  constructor() { }

  ngOnInit(): void {
  }

}
