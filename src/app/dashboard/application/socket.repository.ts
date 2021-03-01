import { Observable } from 'rxjs';

export abstract class SocketRepository {
  abstract listen(eventName: string): Observable<any>;
}
