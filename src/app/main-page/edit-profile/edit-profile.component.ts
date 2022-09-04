import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFriend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input() user: IFriend;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  form = new FormGroup({
    nickname: new FormControl(''),
    age: new FormControl(''),
    about: new FormControl('')
  })
  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.closeModal.emit(true);
  }

}
