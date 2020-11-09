import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-shared-print-error',
    templateUrl: './print-error.component.html'
})
export class PrintErrorComponent {

  @Input() control: FormControl;

  @Input() attribute: string;
}
