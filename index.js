const BaseGateway = require('@easy-payment/base').BaseGateway;

/**
 * @param {Object} gateway - callback for the gateway to be initialized
 * @param {Object} options - an object with the properties required by a particular Gateway,
 * see the relevant gateway for more details
 * @returns {BaseGateway} an object which inherits (prototype) from BaseGateway
 */
exports.create = function create(gateway, options) {
  const gw = gateway(options);
  if (!gw instanceof BaseGateway) {
    throw new Error('the gateway must be an instance of the BaseGateway');
  }

  return gw;
};
