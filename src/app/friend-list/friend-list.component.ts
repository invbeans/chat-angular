import { Component, OnInit } from '@angular/core';
import { friendList } from '../shared/data/friends-data';
import { IFriend } from '../shared/models/friend';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: IFriend[];
  friendId: number = -1;
  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.friends = friendList;
  }

  openModal(friendId: number){
    this.friendId = friendId;
    this.modalService.open();
  }

  closeModal(){
    this.modalService.close();
  }

}
