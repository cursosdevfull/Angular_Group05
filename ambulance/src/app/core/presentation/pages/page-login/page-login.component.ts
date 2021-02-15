import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfigService } from 'src/app/config/config.service';
import { UserEntity } from 'src/app/users/domain/user.entity';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  group: FormGroup | any;

  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router,
    private readonly authService: AuthService
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

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required),
    });
  }

  enter() {
    const user: UserEntity = this.group.value;
    this.authService.login(user);
  }
}
