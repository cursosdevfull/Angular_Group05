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

  insert(fd: FormData): Observable<MedicEntity> {
    return this.http.post<MedicEntity>(`${environment.pathAPI}/medics/`, fd);
  }
  update(id: string, fd: FormData): Observable<MedicEntity> {
    return this.http.put<MedicEntity>(
      `${environment.pathAPI}/medics/${id}`,
      fd
    );
  }
  delete(id: number): Observable<MedicEntity> {
    return this.http.delete<MedicEntity>(`${environment.pathAPI}/medics/${id}`);
  }
  getAll(): Observable<MedicEntity[]> {
    return this.http.get<MedicEntity[]>(`${environment.pathAPI}/medics`);
  }
  getOne(id: string): Observable<MedicEntity> {
    throw new Error('Method not implemented.');
  }
  getByPage(page: number): Observable<any> {
    return this.http
      .get(`${environment.pathAPI}/medics/page/${page}/${environment.pageSize}`)
      .pipe(
        map((data: any) => ({
          records: mapping(data.records),
          totalRecords: data.totalRecords,
        })),
        take(1)
      );
  }
}
