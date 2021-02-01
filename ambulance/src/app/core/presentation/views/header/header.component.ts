import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigate(['/auth']);
  }

  lock() {
    this.router.navigate(['/auth', 'lock']);
  }
}
