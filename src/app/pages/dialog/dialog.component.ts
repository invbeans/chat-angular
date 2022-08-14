import { Component, OnInit } from '@angular/core';
import { friendList } from 'src/app/data/friends-data';
import { messageList } from 'src/app/data/message-data';
import { IFriend } from 'src/app/models/friend';
import { IMessage } from 'src/app/models/message';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  friends: IFriend[] = [];

  constructor() { }

  ngOnInit(): void {
    this.friends = friendList;
    //или заменить потом на получение от сервиса
  }

}
