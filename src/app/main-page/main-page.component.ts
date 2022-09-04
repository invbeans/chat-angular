import { Component, OnInit } from '@angular/core';
import { friendList } from 'src/app/shared/data/friends-data';
import { IFriend } from 'src/app/shared/models/friend';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user: IFriend;
  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.user = friendList[2];
  }

  openModal(flag: boolean){
    this.modalService.open();
  }
}
