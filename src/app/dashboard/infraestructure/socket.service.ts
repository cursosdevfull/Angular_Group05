import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { SocketRepository } from '../application/socket.repository';

@Injectable()
export class SocketService extends SocketRepository {
  socket: any;

  constructor() {
    super();
    this.socket = io.connect(environment.urlSocket);
  }

  listen(eventName: string) {
    console.log('event', eventName);
    return new Observable((observer) => {
      this.socket.on(eventName, (result: any) => {
        observer.next(result);
      });
    });
  }
}
