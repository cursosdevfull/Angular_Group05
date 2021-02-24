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
import { mapping } from 'src/app/medics/application/medic.dto';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExportComponent } from 'src/app/shared/components/export/export.component';
@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent implements OnInit {
  metaDataColumns: IMetaDataColumn[] = mocksMedicMetaDataColumn;
  data: MedicEntity[] = [];
  totalRecords = 0;
  currentPage = 0;

  constructor(
    private readonly medicUseCase: MedicUseCase,
    private readonly utils: UtilsService,
    private readonly configService: ConfigService,
    private readonly bottonSheet: MatBottomSheet
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
    this.currentPage = page;
    this.medicUseCase.getByPage(page).subscribe((response: any) => {
      this.data = response.records;
      this.totalRecords = response.totalRecords;
    });
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

      if (!row) {
        this.medicUseCase
          .insert(response)
          .subscribe(() => this.list(this.currentPage));
      } else {
        this.medicUseCase
          .update(row.id, response)
          .subscribe(() => this.list(this.currentPage));
      }
    });
  }

  openExport() {
    this.bottonSheet.open(ExportComponent, {
      data: this.data,
    });
  }

  changePage(page: number) {
    this.list(page);
  }

  delete(row: MedicEntity) {
    this.utils
      .confirm()
      .afterClosed()
      .subscribe((response: any) => {
        if (!response) {
          return;
        }

        this.medicUseCase
          .delete(+row.id)
          .subscribe(() => this.list(this.currentPage));
      });
  }
}
