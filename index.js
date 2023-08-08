import { BaseGateway } from '@easy-payment/base';

/**
 * @param {Object} gateway - callback for the gateway to be initialized
 * @param {Object} options - an object with the properties required by a particular Gateway,
 * see the relevant gateway for more details
 * @returns {BaseGateway} an object which inherits (prototype) from BaseGateway
 */
const create = (gateway, options) => {
  const gw = gateway(options);
  if (!gw instanceof BaseGateway) {
    throw new Error('the gateway must be an instance of the BaseGateway');
  }

  return gw;
};

export default {
  create
};