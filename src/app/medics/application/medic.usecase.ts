import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicEntity } from '../domain/medic.entity';
import { MedicOperationRepository } from './medic-operation.repository';

@Injectable()
export class MedicUseCase {
  constructor(private readonly medicRepository: MedicOperationRepository) {}

  insert(fd: FormData): Observable<MedicEntity> {
    return this.medicRepository.insert(fd);
  }

  update(id: string, fd: FormData): Observable<MedicEntity> {
    return this.medicRepository.update(id, fd);
  }

  delete(id: number): Observable<MedicEntity> {
    return this.medicRepository.delete(id);
  }

  getAll(): Observable<MedicEntity[]> {
    return this.medicRepository.getAll();
  }

  getOne(id: string): Observable<MedicEntity> {
    return this.medicRepository.getOne(id);
  }

  getByPage(
    page: number,
    text: string
  ): Observable<MedicEntity | MedicEntity[]> {
    return this.medicRepository.getByPage(page, text);
  }
}
