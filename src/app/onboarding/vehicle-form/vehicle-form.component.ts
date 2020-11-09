import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY'
  },
};

@Component({
  selector: 'app-onboarding-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
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
export class VehicleFormComponent {

  @Input() formGroup: FormGroup;

  chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>): void {
    let ctrlValue = this.formGroup.get('carYear').value;
    if (typeof ctrlValue === 'string') {
      ctrlValue = moment();
    }
    ctrlValue.year(normalizedYear.year());
    this.formGroup.get('carYear').setValue(ctrlValue);
    datepicker.close();
  }
}
