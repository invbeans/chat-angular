import { Component, Input, OnInit } from '@angular/core';
import { IFriend } from 'src/app/models/friend';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {
  @Input() friend: IFriend;
  constructor() { }

  ngOnInit(): void {
  }

}
