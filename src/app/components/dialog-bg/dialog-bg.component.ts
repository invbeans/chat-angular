import { Component, OnInit } from '@angular/core';
import { messageList } from 'src/app/data/message-data';
import { IMessage } from 'src/app/models/message';

@Component({
  selector: 'app-dialog-bg',
  templateUrl: './dialog-bg.component.html',
  styleUrls: ['./dialog-bg.component.css']
})
export class DialogBgComponent implements OnInit {

  messages: IMessage[] = [];
  constructor() { }

  ngOnInit(): void {
    this.messages = messageList;
  }

}
