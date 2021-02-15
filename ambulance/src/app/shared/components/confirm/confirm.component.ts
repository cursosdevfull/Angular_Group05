import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  message: string = '¿Está seguro de lo que va a hacer?';
  constructor() {}

  ngOnInit(): void {}
}
