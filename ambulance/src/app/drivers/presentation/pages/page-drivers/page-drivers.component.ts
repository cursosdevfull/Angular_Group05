import { Component, OnInit } from '@angular/core';
import { IMetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-drivers',
  templateUrl: './page-drivers.component.html',
  styleUrls: ['./page-drivers.component.css'],
})
export class PageDriversComponent implements OnInit {
  metaDataColumns: IMetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'fullName', title: 'Nombre completo' },
    { field: 'license', title: 'Licencia de conducir' },
  ];

  data: any[] = [
    { id: 1, fullName: 'Jorge Sarmiento', license: 456225452 },
    { id: 2, fullName: 'Jorge Sarmiento', license: 456225452 },
    { id: 3, fullName: 'Jorge Sarmiento', license: 456225452 },
    { id: 4, fullName: 'Jorge Sarmiento', license: 456225452 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
