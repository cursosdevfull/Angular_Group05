import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router
  ) {
    this.configService.config = {
      layout: {
        menu: {
          hidden: true,
        },
        header: {
          hidden: true,
        },
      },
    };
  }

  ngOnInit(): void {}

  enter() {
    this.router.navigate(['/dashboard']);
  }
}