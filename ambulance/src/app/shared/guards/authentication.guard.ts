import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class AuthenticationGuard implements CanLoad, CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canLoad(): boolean {
    const userLogged = this.authService.userIsLogged;
    if (!userLogged) {
      this.router.navigate(['/auth']);
    }
    return userLogged;
  }

  canActivate(): boolean {
    return this.canLoad();
  }
}
