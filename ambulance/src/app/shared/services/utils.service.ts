import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private readonly dialog: MatDialog) {}

  openModal(
    classComponent: any,
    options: { [s: string]: string | boolean | number | object }
  ) {
    this.dialog.open(classComponent, options);
  }
}
