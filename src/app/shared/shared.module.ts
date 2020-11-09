import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { PrintErrorComponent } from './print-error/print-error.component';
import { PrintListComponent } from './print-list/print-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    PrintErrorComponent,
    PrintListComponent
  ],
  exports: [
    PrintErrorComponent,
    PrintListComponent
  ]
})
export class SharedModule { }
