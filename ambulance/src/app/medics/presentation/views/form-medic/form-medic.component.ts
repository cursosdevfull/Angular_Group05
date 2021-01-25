import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicEntity } from 'src/app/medics/domain/medic.entity';
import { CustomValidators } from 'src/app/shared/utils/custom-validators';

@Component({
  selector: 'amb-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title: string;
  group: FormGroup | any;

  listFields = [
    { name: 'id', value: 29, validators: [] },
    { name: 'name', value: 'sergio', validators: [] },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) private data: MedicEntity | any) {
    this.title = data ? 'Edición' : 'Nuevo';
    this.setForm();
  }

  setForm() {
    /*  const controls = this.listFields.reduce((accum: any, ctrl: any) => {
      if (!accum[ctrl.name]) {
        accum[ctrl.name] = new FormControl(ctrl.value);
      }

      return accum;
    }, {});

    this.group = new FormGroup(controls); */

    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      name: new FormControl(
        this.data ? this.data.name : null,
        Validators.required
      ),
      surname: new FormControl(
        this.data ? this.data.surname : null,
        Validators.required
      ),
      lastname: new FormControl(
        this.data ? this.data.lastname : null,
        Validators.required
      ),
      email: new FormControl(this.data ? this.data.email : null, [
        Validators.required,
        CustomValidators.validatorEmail,
        /*Validators.pattern(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
        ),*/
        //Validators.email,
      ]),
      dni: new FormControl(
        this.data ? this.data.dni : null,
        Validators.required
      ),
      cmp: new FormControl(
        this.data ? this.data.cmp : null,
        Validators.required
      ),
    });
  }

  save() {
    if (this.group.valid) {
      console.log('el formulario es válido');
    } else {
      console.log('formulario no válido');
    }
    //console.log(this.group);
  }

  ngOnInit(): void {}
}
