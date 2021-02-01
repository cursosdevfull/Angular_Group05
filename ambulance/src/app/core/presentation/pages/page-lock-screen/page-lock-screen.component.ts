import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'amb-page-lock-screen',
  templateUrl: './page-lock-screen.component.html',
  styleUrls: ['./page-lock-screen.component.css'],
})
export class PageLockScreenComponent implements OnInit {
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

  unlock() {
    this.router.navigate(['/dashboard']);
  }
}
