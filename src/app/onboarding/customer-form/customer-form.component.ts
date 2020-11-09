import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-onboarding-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [ MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
  ],
})
export class CustomerFormComponent {

  @Input() formGroup: FormGroup;

  chosenYearHandler(normalizedYear: Moment): void {
    let ctrlValue = this.formGroup.get('expiryDate').value;
    if (typeof ctrlValue === 'string') {
      ctrlValue = moment();
    }
    ctrlValue.year(normalizedYear.year());
    this.formGroup.get('expiryDate').setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>): void {
    const ctrlValue = this.formGroup.get('expiryDate').value;
    ctrlValue.month(normalizedMonth.month());
    console.log(ctrlValue);
    this.formGroup.get('expiryDate').setValue(ctrlValue);
    datepicker.close();
  }
}
