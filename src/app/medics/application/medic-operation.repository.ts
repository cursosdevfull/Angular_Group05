import { Observable } from 'rxjs';
import { MedicEntity } from '../domain/medic.entity';

export abstract class MedicOperationRepository {
  abstract insert(fd: FormData): Observable<MedicEntity>;
  abstract update(id: string, fd: FormData): Observable<MedicEntity>;
  abstract delete(id: number): Observable<MedicEntity>;
  abstract getAll(): Observable<MedicEntity[]>;
  abstract getOne(id: string): Observable<MedicEntity>;
  abstract getByPage(page: number): Observable<MedicEntity | MedicEntity[]>;
}
