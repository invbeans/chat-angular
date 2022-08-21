import { Component, OnInit } from '@angular/core';
import { friendList } from 'src/app/data/friends-data';
import { messageList } from 'src/app/data/message-data';
import { IFriend } from 'src/app/models/friend';
import { IMessage } from 'src/app/models/message';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  friends: IFriend[] = [];
  messages: IMessage[] = [];

  index = -1;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.friends = friendList;
    this.messages = messageList;
  }

  openModal(i: number){
    this.index = i;
    this.modalService.open();
  }

}
