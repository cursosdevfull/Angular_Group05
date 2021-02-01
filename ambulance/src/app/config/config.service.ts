import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Config } from './layer.interface';
import { AMB_CONFIG } from './token';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configSubject: BehaviorSubject<Config>;

  constructor(@Inject(AMB_CONFIG) config: Config) {
    this.configSubject = new BehaviorSubject<Config>(config);
  }

  set config(value: any) {
    let config = this.configSubject.getValue();
    config = _.merge({}, config, value);

    this.configSubject.next(config);
  }

  get config(): any {
    return this.configSubject.asObservable();
  }
}
