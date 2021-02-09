import { Component, OnInit } from '@angular/core';
import { MedicUseCase } from 'src/app/medics/application/medic.usecase';
import { MedicEntity } from 'src/app/medics/domain/medic.entity';
import { IMetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormMedicComponent } from '../../views/form-medic/form-medic.component';
import mocksMedics from '../../../mocks/medics.json';
import mocksMedicMetaDataColumn from '../../../mocks/medic-metadatacolumn.json';
import { ConfigService } from 'src/app/config/config.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent implements OnInit {
  metaDataColumns: IMetaDataColumn[] = mocksMedicMetaDataColumn;
  data: MedicEntity[] = [];
  totalRecords = 0;

  constructor(
    private readonly medicUseCase: MedicUseCase,
    private readonly utils: UtilsService,
    private readonly configService: ConfigService
  ) {
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

  ngOnInit(): void {
    this.list(0);
  }

  list(page: number) {
    // this.medicUseCase.getByPage(page).subscribe(console.log);

    this.totalRecords = mocksMedics.length;
    this.data = mocksMedics.slice(page * 4, page * 4 + 4);
    this.medicUseCase.getAll().subscribe(console.log, console.log);
  }

  openForm(row: MedicEntity | any = null) {
    const ref: MatDialogRef<any> = this.utils.openModal(FormMedicComponent, {
      disableClose: true,
      panelClass: 'container-modal',
      data: row,
    });

    ref.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (!response.id) {
        this.medicUseCase.insert(response).subscribe(console.log);
      }
    });
  }

  changePage(page: number) {
    this.list(page);
  }
}
