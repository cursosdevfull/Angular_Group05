import { Component, OnInit } from '@angular/core';
import { MedicUseCase } from 'src/app/medics/application/medic.usecase';

@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent implements OnInit {
  constructor(private readonly medicUseCase: MedicUseCase) {}

  ngOnInit(): void {}

  listar() {
    this.medicUseCase.getAll().subscribe(console.log, console.log);
  }
}
