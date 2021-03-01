import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CovidRepository } from '../application/covid.repository';
import { Covid } from '../domain/covid.entity';

@Injectable()
export class CovidService extends CovidRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getAll(): Observable<Covid[]> {
    return this.http
      .get<Covid[]>(environment.apiCovid)
      .pipe(map((data) => data.slice(0, 20)));
  }
}
