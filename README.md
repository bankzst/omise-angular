# Omise Angular

## Getting Started

1.  Add `<script src="https://cdn.omise.co/omise.js"></script>` to src/index.html
2.  Declare OmiseCard const as any under component import using `declare const OmiseCard: any;`
3.  Configure your omise public key in component file `ngOnInit()` using `OmiseCard.configure`
4.  Configure your submit button element id, amount, currency, and others properties in component file using `OmiseCard.configureButton`.
5.  Add `OmiseCard.attach();` to apply configuration
6.  Please refer to [https://www.omise.co/omise-js](https://www.omise.co/omise-js) for more information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.