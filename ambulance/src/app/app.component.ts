import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: any;

  constructor(private readonly configService: ConfigService) {}

  ngOnInit() {
    this.configService.config.subscribe((config: any) => {
      this.config = config;
    });
  }
}
