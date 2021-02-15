import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private readonly dialog: MatDialog) {}

  openModal(
    classComponent: any,
    options: { [s: string]: string | boolean | number | object }
  ) {
    return this.dialog.open(classComponent, options);
  }

  confirm(): any {
    const ref: any = this.openModal(ConfirmComponent, {
      width: '320px',
      disabled: true,
    });
    return ref;
  }
}
