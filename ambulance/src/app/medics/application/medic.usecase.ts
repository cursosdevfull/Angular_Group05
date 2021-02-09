import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicEntity } from '../domain/medic.entity';
import { MedicOperationRepository } from './medic-operation.repository';

@Injectable()
export class MedicUseCase {
  constructor(private readonly medicRepository: MedicOperationRepository) {}

  insert(medic: MedicEntity): Observable<MedicEntity> {
    return this.medicRepository.insert(medic);
  }

  update(id: string, medic: MedicEntity): Observable<MedicEntity> {
    return this.medicRepository.update(id, medic);
  }

  delete(id: string): Observable<MedicEntity> {
    return this.medicRepository.delete(id);
  }

  getAll(): Observable<MedicEntity[]> {
    return this.medicRepository.getAll();
  }

  getOne(id: string): Observable<MedicEntity> {
    return this.medicRepository.getOne(id);
  }

  getByPage(page: number): Observable<MedicEntity | MedicEntity[]> {
    return this.medicRepository.getByPage(page);
  }
}
