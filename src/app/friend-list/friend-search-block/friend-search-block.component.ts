import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFriend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-friend-search-block',
  templateUrl: './friend-search-block.component.html',
  styleUrls: ['./friend-search-block.component.css']
})
export class FriendSearchBlockComponent implements OnInit {
  @Input() friend: IFriend;
  @Output() isModal: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.isModal.emit(this.friend.id);
  }

}
