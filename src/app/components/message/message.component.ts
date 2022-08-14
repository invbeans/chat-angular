import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: IMessage;
  date = "";
  constructor() { }

  ngOnInit(): void {
    this.date = this.message.time.getDate().toString() +
    "." + this.message.time.getMonth().toString() +
    "." + this.message.time.getFullYear().toString() +
    " - " + this.message.time.getHours().toString() +
    ":" + this.message.time.getMinutes().toString() +
    ":" + this.message.time.getSeconds().toString()
  }

}
