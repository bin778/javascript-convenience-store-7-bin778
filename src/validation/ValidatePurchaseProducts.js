import { ERROR_MESSAGE } from '../constant/Error.js';

class ValidatePurchaseProducts {
  static validateInputFormat(purchaseProducts) {
    const format_regex = /^\[[^\[\]-]+-\d+\]$/;
    purchaseProducts.forEach((item) => {
      if (!format_regex.test(item)) throw new Error(ERROR_MESSAGE.PURCHASE.inputFormat);
    });
  }
}

export default ValidatePurchaseProducts;
