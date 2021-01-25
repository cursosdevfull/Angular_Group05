import { FormControl } from '@angular/forms';

export class CustomValidators {
  static validatorEmail(control: FormControl): { [s: string]: boolean } | null {
    if (!control || !control.value) {
      return null;
    }

    const value = control.value;
    if (
      value.match(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
      )
    ) {
      return null;
    }

    return { emailInvalid: true };
  }
}
