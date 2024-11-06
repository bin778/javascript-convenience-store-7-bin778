import validateQuantity from '../validation/validateQuantity.js';

class HandlerInput {
  static handleQuantityInput(quantityArr) {
    validateQuantity.validateInputFormat(quantityArr);
  }
}

export default HandlerInput;
