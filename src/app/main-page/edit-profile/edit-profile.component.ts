import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFriend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input() user: IFriend;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nickname: new FormControl('', [
        Validators.pattern('^[^0-9][^@#]*$'),
        Validators.minLength(2)
      ]),
      age: new FormControl('', [
        Validators.min(1),
        Validators.max(150),
        Validators.pattern('^[0-9]*$')
      ]),
      about: new FormControl('',
      Validators.maxLength(150))
    })
  }

  ngOnInit(): void {
  }

  onClick(){
    this.closeModal.emit(true);
  }

}
