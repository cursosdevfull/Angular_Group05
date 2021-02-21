import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'amb-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
})
export class PageDashboardComponent implements OnInit {
  constructor(private readonly configService: ConfigService) {
    this.configService.config = {
      layout: {
        menu: {
          hidden: false,
        },
        header: {
          hidden: false,
        },
      },
    };
  }

  ngOnInit(): void {}
}
