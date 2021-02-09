import { Observable } from 'rxjs';
import { MedicEntity } from '../domain/medic.entity';

export abstract class MedicOperationRepository {
  abstract insert(medic: MedicEntity): Observable<MedicEntity>;
  abstract update(id: string, medic: MedicEntity): Observable<MedicEntity>;
  abstract delete(id: string): Observable<MedicEntity>;
  abstract getAll(): Observable<MedicEntity[]>;
  abstract getOne(id: string): Observable<MedicEntity>;
  abstract getByPage(page: number): Observable<MedicEntity | MedicEntity[]>;
}
