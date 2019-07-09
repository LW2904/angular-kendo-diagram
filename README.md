# AngularKendoDiagram

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

Kendo (and its dependecy, jQuery) is currently included through a `<script>` tag in `src/index.html`. This is done to avoid a (potential) bug, tracked in [kendo-angular/#2376](https://github.com/telerik/kendo-angular/issues/2376), but it should be replaced with an `include` or at least some local version through a `scripts` property in `angular.json`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
