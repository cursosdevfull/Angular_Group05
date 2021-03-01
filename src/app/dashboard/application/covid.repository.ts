import { Observable } from 'rxjs';
import { Covid } from '../domain/covid.entity';

export abstract class CovidRepository {
  abstract getAll(): Observable<Covid[]>;
}
