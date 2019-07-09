import { Component } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-root',
    template: `
        <app-diagram>
  `,
    styles: []
})
export class AppComponent {
    title = 'angular-kendo-diagram';

    constructor() {
        if (window !== undefined) {
            (window as any).$ = kendo.jQuery;
        }
    }
}
