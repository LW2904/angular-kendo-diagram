import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-diagram',
    template: `
        <p>Kendo UI for jQuery Diagram:</p>
        <div #diagram></div>
    `
})
export class DiagramComponent implements AfterViewInit, OnDestroy {
    @ViewChild('diagram', { static: true }) diagramEl: ElementRef;

    @Input() items: Object[];
    @Input('shape') customShape: Object;
    @Input('layout') customLayout: Object;

    constructor(private hostEl: ElementRef) { }

    ngAfterViewInit() {
        kendo.jQuery(this.diagramEl.nativeElement).kendoDiagram({
            dataSource: {
                name: 'node',
                data: this.items
            },
            layout: Object.assign({
                type: 'tree',
                subtype: 'down',
                horizontalSeparation: 30,
                verticalSeparation: 20
            }, this.customLayout),
            shapeDefaults: Object.assign({
                width: 40,
                height: 40,
            }, this.customShape)
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}
