import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {
  NumberInput = '';
  constructor() { }

  ngOnInit() {
  }

  Inumber(digit: number) {
    this.NumberInput = `${this.NumberInput}${digit}`;
    console.log(this.NumberInput);
  }

}
