import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { environment } from 'src/environments/environment';
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
  @Input() total: number = 0;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  @ContentChildren(MatColumnDef, { descendants: true }) columnsDef:
    | QueryList<MatColumnDef>
    | undefined;

  dataSource: any;
  listFields: string[] = [];

  fcTextToSearch = new FormControl('');

  pageSize = 0;

  constructor() {}

  ngOnInit(): void {
    this.listFields = this.metaDataColumns.map((el) => el.field);
    this.loadData();
    this.pageSize = environment.pageSize;
  }

  ngOnChanges() {
    this.loadData();
  }

  applyFilter() {
    const filter = this.fcTextToSearch.value.trim();
    this.onFilter.emit(filter);
  }

  loadData() {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngAfterContentInit(): void {
    if (!this.columnsDef) return;
    this.columnsDef.forEach((columnDef) => this.table?.addColumnDef(columnDef));
    if (this.columnsDef.length) {
      this.listFields.push('actions');
    }
  }

  handlerPage(evt: any) {
    this.onChangePage.emit(evt.pageIndex);
  }
}
