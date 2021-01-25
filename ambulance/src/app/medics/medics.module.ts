import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicOperation } from './infraestructure/medic.operation';
import { MedicUseCase } from './application/medic.usecase';
import { MedicOperationRepository } from './application/medic-operation.repository';
import { HttpClientModule } from '@angular/common/http';
import { PageMedicsComponent } from './presentation/pages/page-medics/page-medics.component';
import { MedicsRoutingModule } from './medics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormMedicComponent } from './presentation/views/form-medic/form-medic.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageMedicsComponent, FormMedicComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MedicsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    MedicUseCase,
    { provide: MedicOperationRepository, useClass: MedicOperation },
  ],
  exports: [PageMedicsComponent],
})
export class MedicsModule {}
