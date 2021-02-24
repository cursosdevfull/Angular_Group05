import { Injectable } from '@angular/core';
import { ExportRepository } from '../infraestructure/export.repository';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable()
export class ExportService extends ExportRepository {
  constructor() {
    super();
  }

  exportToExcel(content: any[], bookName: string, sheetName: string): void {
    const sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(content);
    const book: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(book, sheet, sheetName);
    XLSX.writeFile(book, `${bookName}.xlsx`);
  }

  exportToPDF(
    content: any[],
    title: string,
    fileName: string,
    action: string
  ): void {
    const informationFormatted: any = this.getInformation(content, title);
    const docGenerated = pdfMake.createPdf(informationFormatted);
    switch (action) {
      case 'abrir':
        docGenerated.open();
        break;
      case 'descargar':
        docGenerated.download();
        break;
      case 'imprimir':
        docGenerated.print();
        break;
    }
  }

  getInformation(content: any[], title: string): object {
    const dataFormatted = {
      content: [
        {
          text: title,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
      ],

      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
          decoration: 'underline',
        },
      },
    };

    this.addHeadersToPDF(dataFormatted, content[0]);
    this.adddItemsToPDF(dataFormatted, content);

    return dataFormatted;
  }

  addHeadersToPDF(dataFormatted: any, element: any): void {
    const headersColumns = [];
    for (let prop in element) {
      headersColumns.push({
        text: prop,
        style: 'header',
      });
    }

    dataFormatted.content.push({
      columns: headersColumns,
    });
  }

  adddItemsToPDF(dataFormatted: any, content: any[]): void {
    content.forEach((el) => {
      const items: any[] = [];
      for (let prop in el) {
        items.push(el[prop]);
      }
      dataFormatted.content.push({
        columns: items,
      });
    });
  }
}
