export abstract class ExportRepository {
  abstract exportToExcel(
    content: any[],
    bookName: string,
    sheetName: string
  ): void;
  abstract exportToPDF(
    content: any[],
    title: string,
    fileName: string,
    action: string
  ): void;
}
