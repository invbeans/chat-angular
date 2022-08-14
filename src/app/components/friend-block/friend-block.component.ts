import { Component, Input, OnInit } from '@angular/core';
import { IFriend } from 'src/app/models/friend';

@Component({
  selector: 'app-friend-block',
  templateUrl: './friend-block.component.html',
  styleUrls: ['./friend-block.component.css']
})
export class FriendBlockComponent implements OnInit {
  @Input() friend: IFriend;

  constructor() { }

  ngOnInit(): void {
  }

}
