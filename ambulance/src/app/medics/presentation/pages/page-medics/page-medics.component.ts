import { Component, OnInit } from '@angular/core';
import { MedicUseCase } from 'src/app/medics/application/medic.usecase';
import { MedicEntity } from 'src/app/medics/domain/medic.entity';
import { IMetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormMedicComponent } from '../../views/form-medic/form-medic.component';
import mocksMedics from '../../../mocks/medics.json';
import mocksMedicMetaDataColumn from '../../../mocks/medic-metadatacolumn.json';
@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css'],
})
export class PageMedicsComponent implements OnInit {
  metaDataColumns: IMetaDataColumn[] = mocksMedicMetaDataColumn;
  data: MedicEntity[] = mocksMedics;

  constructor(
    private readonly medicUseCase: MedicUseCase,
    private readonly utils: UtilsService
  ) {}

  ngOnInit(): void {}

  listar() {
    this.medicUseCase.getAll().subscribe(console.log, console.log);
  }

  openForm(row: MedicEntity | any = null) {
    this.utils.openModal(FormMedicComponent, {
      disableClose: true,
      panelClass: 'container-modal',
      data: row,
    });
  }
}
