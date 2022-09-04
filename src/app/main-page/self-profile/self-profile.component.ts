import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFriend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-self-profile',
  templateUrl: './self-profile.component.html',
  styleUrls: ['./self-profile.component.css']
})
export class SelfProfileComponent implements OnInit {

  @Input() user: IFriend;
  @Output() isModal: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.isModal.emit(true);
  }

}
