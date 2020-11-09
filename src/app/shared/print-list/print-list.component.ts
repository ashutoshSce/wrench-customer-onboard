import { Component, Input, OnInit } from '@angular/core';

interface Item {
  title: string;
  value: string;
}

@Component({
    selector: 'app-shared-print-list',
    templateUrl: './print-list.component.html'
})
export class PrintListComponent {

  @Input() header: string;
  @Input() items: Item[] = [];

  trackByKey(index: number, el: any): string {
    return el.title;
  }
}
