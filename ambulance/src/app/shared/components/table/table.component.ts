import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { IMetaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() metaDataColumns: IMetaDataColumn[] = [];
  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  @ContentChildren(MatColumnDef, { descendants: true }) columnsDef:
    | QueryList<MatColumnDef>
    | undefined;

  dataSource: any = [];
  listFields: string[] = [];

  constructor() {}

  ngOnInit(): void {
    /*     this.metaDataColumns = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Nombre' },
      { field: 'lastname', title: 'Apellido' },
    ]; */

    this.listFields = this.metaDataColumns.map((el) => el.field);
    this.loadData();
  }

  ngOnChanges() {
    this.loadData();
  }

  loadData() {
    /*     const data = [
      { id: 1, name: 'Alberto', lastname: 'Vega' },
      { id: 2, name: 'Alberto', lastname: 'Vega' },
      { id: 3, name: 'Alberto', lastname: 'Vega' },
      { id: 4, name: 'Alberto', lastname: 'Vega' },
      { id: 5, name: 'Alberto', lastname: 'Vega' },
      { id: 6, name: 'Alberto', lastname: 'Vega' },
      { id: 7, name: 'Alberto', lastname: 'Vega' },
    ]; */

    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngAfterContentInit(): void {
    if (!this.columnsDef) return;
    this.columnsDef.forEach((columnDef) => this.table?.addColumnDef(columnDef));
    if (this.columnsDef.length) {
      this.listFields.push('actions');
    }
  }
}
