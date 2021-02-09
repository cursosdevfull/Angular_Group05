import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicOperationRepository } from '../application/medic-operation.repository';
import { mapping } from '../application/medic.dto';
import { MedicEntity } from '../domain/medic.entity';
import { AbstractStorage } from 'src/app/shared/services/abstract-storage';

@Injectable({
  providedIn: 'root',
})
export class MedicOperation extends MedicOperationRepository {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: AbstractStorage
  ) {
    super();
  }

  insert(medic: MedicEntity): Observable<MedicEntity> {
    const headers = new HttpHeaders({
      authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTAyOTc1MzgsImV4cCI6MTYxMDI5OTMzOCwiX2lkIjoiNWY2YTdkM2MyMmJiMzk0NTQ0Y2MwOGI5Iiwicm9sZXMiOlt7InJvbGVOYW1lIjoiQURNSU5JU1RSQVRPUiJ9LHsicm9sZU5hbWUiOiJNRURJQyJ9XX0.9QlmA4IEy3xEvN_Tgpf5O81lecG_5BSeh9bsQTb3m5I',
    });
    return this.http.post<MedicEntity>(`${environment.pathAPI}/medics/`, medic);
  }
  update(id: string, medic: MedicEntity): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<MedicEntity[]> {
    return this.http.get<MedicEntity[]>(`${environment.pathAPI}/medics`);
  }
  getOne(id: string): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  getByPage(page: number): Observable<any> {
    /*     const accessToken = this.storage.get('accessToken');
    const headers = new HttpHeaders({
      authorization: `Bearer ${accessToken}`,
    }); */
    return this.http
      .get(
        `${environment.pathAPI}/medics/page/${page}/${environment.pageSize}`
        /*  { headers } */
      )
      .pipe(
        map((data: any) => ({
          records: mapping(data.records),
          totalRecords: data.totalRecords,
        })),
        take(1)
      );
  }
}
