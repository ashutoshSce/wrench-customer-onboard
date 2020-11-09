import {NgModule} from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  exports: [
    CdkStepperModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDatepickerModule
  ]
})
export class MaterialModule {}
