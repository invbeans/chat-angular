import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  form = new FormGroup({
    search: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  get search(){
    return this.form.controls['search'] as FormControl;
  }

}
