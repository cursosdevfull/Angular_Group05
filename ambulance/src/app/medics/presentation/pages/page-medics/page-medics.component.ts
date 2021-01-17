import { Component, OnInit } from '@angular/core';
import { MedicUseCase } from 'src/app/medics/application/medic.usecase';
import { IMetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent implements OnInit {
  metaDataColumns: IMetaDataColumn[] = [
    {
      field: 'id',
      title: 'ID',
    },
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
    { field: 'cmp', title: 'Colegiatura' },
    { field: 'dni', title: 'Documento de Identidad' },
  ];

  data: any[] = [
    {
      id: 1,
      name: 'Carmen',
      lastname: 'Alegría',
      cmp: '45625',
      dni: '78652416',
    },
    {
      id: 2,
      name: 'Carmen',
      lastname: 'Alegría',
      cmp: '45625',
      dni: '78652416',
    },
    {
      id: 3,
      name: 'Carmen',
      lastname: 'Alegría',
      cmp: '45625',
      dni: '78652416',
    },
    {
      id: 4,
      name: 'Carmen',
      lastname: 'Alegría',
      cmp: '45625',
      dni: '78652416',
    },
    {
      id: 5,
      name: 'Carmen',
      lastname: 'Alegría',
      cmp: '45625',
      dni: '78652416',
    },
    {
      id: 6,
      name: 'Carmen',
      lastname: 'Alegría',
      cmp: '45625',
      dni: '78652416',
    },
  ];

  constructor(private readonly medicUseCase: MedicUseCase) {}

  ngOnInit(): void {}

  listar() {
    this.medicUseCase.getAll().subscribe(console.log, console.log);
  }
}
