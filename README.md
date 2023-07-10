# easy-payment

> Node.js multi-gateway payment processing module

## Installation

    $ npm install -save easy-payment

## Usage

```Javascript

const Gateways = require('easy-payment');
const IDBANK = require('@easy-payment/idbank').gateway;

const settings = {
    ...
};
const client = Gateways.create(IDBANK, settings);

```

## Supported Gateways

[IDBank](https://github.com/zealous-tech/easy-payment-idbank)