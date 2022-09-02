import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.css']
})
export class DialogInputComponent implements OnInit {
  form = new FormGroup({
    text: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  get text(){
    return this.form.controls['text'] as FormControl;
  }

}
