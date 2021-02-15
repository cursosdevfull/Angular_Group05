import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserEntity } from '../users/domain/user.entity';
import { take } from 'rxjs/operators';
import { StorageService } from '../shared/services/storage.service';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = false;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly storage: StorageService,
    private readonly router: Router
  ) {}

  login(user: UserEntity) {
    this.httpClient
      .post(`${environment.pathAPI}/users/login`, {
        correo: user.correo,
        password: user.contrasena,
      })
      .pipe(take(1))
      .subscribe((data: any) => {
        this.isLogged = true;
        this.storage.save('accessToken', data.accessToken);
        this.storage.save('refreshToken', data.refreshToken);
        this.router.navigate(['/dashboard']);
      });
  }

  logout() {
    this.isLogged = false;
    this.storage.clear();
    this.router.navigate(['/auth']);
  }

  get userIsLogged(): boolean {
    const accessToken = this.storage.get('accessToken');
    return this.isLogged || !!accessToken;
  }

  private getRolesUser(): string[] {
    const accessToken = this.storage.get('accessToken');
    const payload: any = jwt_decode(
      !accessToken ? '' : (accessToken as string)
    );
    const rolesUser = payload['roles'];
    return rolesUser;
  }

  isUserInRoles(...rolesAllowed: string[]): boolean {
    const rolesUser = this.getRolesUser();
    let isAllowed = false;

    for (const role of rolesAllowed) {
      if (rolesUser.indexOf(role) > -1) {
        isAllowed = true;
        break;
      }
    }

    return isAllowed;
  }

  getNewAccessToken(): Observable<{
    accessToken: string;
    refreshToken: string;
  }> {
    const refreshToken = this.storage.get('refreshToken');
    return this.httpClient.get<{ accessToken: string; refreshToken: string }>(
      `${environment.pathAPI}/users/refresh/${refreshToken}`
    );
  }
}
