import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Covid } from '../domain/covid.entity';
import { CovidRepository } from './covid.repository';

@Injectable()
export class CovidUseCase {
  constructor(private readonly covidService: CovidRepository) {}

  getAll(): Observable<Covid[]> {
    return this.covidService.getAll();
  }
}
