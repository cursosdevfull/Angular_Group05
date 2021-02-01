import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { IMetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.css'],
})
export class PageHistoryComponent implements OnInit {
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
  constructor(private readonly configService: ConfigService) {
    this.configService.config = {
      layout: {
        menu: {
          hidden: false,
        },
        header: {
          hidden: false,
        },
      },
    };
  }

  ngOnInit(): void {}
}
