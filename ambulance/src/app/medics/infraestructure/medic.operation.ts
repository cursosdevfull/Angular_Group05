import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicOperationRepository } from '../application/medic-operation.repository';
import { MedicEntity } from '../domain/medic.entity';

@Injectable({
  providedIn: 'root',
})
export class MedicOperation extends MedicOperationRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  insert(medic: MedicEntity): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, medic: MedicEntity): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<MedicEntity[]> {
    const headers = new HttpHeaders({
      authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTAyOTc1MzgsImV4cCI6MTYxMDI5OTMzOCwiX2lkIjoiNWY2YTdkM2MyMmJiMzk0NTQ0Y2MwOGI5Iiwicm9sZXMiOlt7InJvbGVOYW1lIjoiQURNSU5JU1RSQVRPUiJ9LHsicm9sZU5hbWUiOiJNRURJQyJ9XX0.9QlmA4IEy3xEvN_Tgpf5O81lecG_5BSeh9bsQTb3m5I',
    });

    return this.http.get<MedicEntity[]>(
      'https://angular03.cursos-dev.com/medics',
      { headers }
    );
  }
  getOne(id: string): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  getByPage(page: number): Observable<MedicEntity[]> {
    throw new Error('Method not implemented.');
  }
}
