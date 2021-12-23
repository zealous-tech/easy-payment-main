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

[IDBank](https://github.com/InstigateMobile/easy-payment-idbank)

[adyen-google-pay](https://github.com/InstigateMobile/easy-payment-adyen-google-pay)

[adyen-apple-pay](https://github.com/InstigateMobile/easy-payment-adyen-apple-pay)