import { Component, OnInit } from '@angular/core';
import { friendList } from 'src/app/shared/data/friends-data';
import { IFriend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user: IFriend;
  constructor() { }

  ngOnInit(): void {
    this.user = friendList[1];
    console.log(this.user.nickname);
  }

}
