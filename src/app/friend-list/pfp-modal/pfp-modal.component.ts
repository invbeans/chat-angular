import { Component, Input, OnInit } from '@angular/core';
import { IFriend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-pfp-modal',
  templateUrl: './pfp-modal.component.html',
  styleUrls: ['./pfp-modal.component.css']
})
export class PfpModalComponent implements OnInit {
  @Input() friend: IFriend;
  constructor() { }

  ngOnInit(): void {
  }

}
