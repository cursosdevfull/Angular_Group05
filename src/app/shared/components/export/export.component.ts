import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ExportUseCase } from '../../application/export.usecase';

@Component({
  selector: 'amb-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private readonly exportUseCase: ExportUseCase
  ) {}

  ngOnInit(): void {}

  export(evt: MouseEvent, option: string, action: string = '') {
    evt.preventDefault();

    if (option === 'excel') {
      this.exportUseCase.exportToExcel(
        this.data,
        'Medicos',
        'Listado de médicos'
      );
    } else if (option === 'pdf') {
      this.exportUseCase.exportToPDF(
        this.data,
        'Lista de médicos',
        'Medicos',
        action
      );
    }
  }
}
