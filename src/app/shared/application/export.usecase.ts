import { Injectable } from '@angular/core';
import { ExportRepository } from '../infraestructure/export.repository';

@Injectable()
export class ExportUseCase {
  constructor(private exportService: ExportRepository) {}

  exportToExcel(content: any[], bookName: string, sheetName: string) {
    this.exportService.exportToExcel(content, bookName, sheetName);
  }

  exportToPDF(content: any[], title: string, fileName: string, action: string) {
    this.exportService.exportToPDF(content, title, fileName, action);
  }
}
