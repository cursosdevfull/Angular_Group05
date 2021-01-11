import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicOperation } from './infraestructure/medic.operation';
import { MedicUseCase } from './application/medic.usecase';
import { MedicOperationRepository } from './application/medic-operation.repository';
import { HttpClientModule } from '@angular/common/http';
import { PageMedicsComponent } from './presentation/pages/page-medics/page-medics.component';

@NgModule({
  declarations: [PageMedicsComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [
    MedicUseCase,
    { provide: MedicOperationRepository, useClass: MedicOperation },
  ],
  exports: [PageMedicsComponent],
})
export class MedicsModule {}
