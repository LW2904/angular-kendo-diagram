import { Component } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-root',
    template: `
        <app-diagram [items]="nodes"></app-diagram>
    `,
    styles: []
})
export class AppComponent {
    title = 'angular-kendo-diagram';
    nodes = this.diagramNodes();

    constructor() {
        if (window !== undefined) {
            (window as any).$ = kendo.jQuery;
        }
    }

    private diagramNodes() {
        const root = { name: 'root', items: [] };
        this.addNodes(root, [3, 2, 2]);
        console.log(root);
        return [root];
    }

    private addNodes(root, levels) {
        if (levels.length > 0) {
            for (let i = 0; i < levels[0]; i++) {
                const node = { name: 'node-' + i + levels[0], items: [] };
                root.items.push(node);

                this.addNodes(node, levels.slice(1));
            }
        }
    }
}
