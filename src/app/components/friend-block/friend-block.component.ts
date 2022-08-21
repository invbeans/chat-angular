import { Component, Input, OnInit } from '@angular/core';
import { IFriend } from 'src/app/models/friend';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-friend-block',
  templateUrl: './friend-block.component.html',
  styleUrls: ['./friend-block.component.css']
})
export class FriendBlockComponent implements OnInit {
  @Input() friend: IFriend;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

}
