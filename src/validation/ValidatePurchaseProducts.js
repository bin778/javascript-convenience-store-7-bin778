import { ERROR_MESSAGE } from '../constant/Error.js';
import { REGEX } from '../constant/Regex.js';

class ValidatePurchaseProducts {
  static validateInputFormat(purchaseProducts) {
    purchaseProducts.forEach((item) => {
      if (!REGEX.formatRegex.test(item)) throw new Error(ERROR_MESSAGE.PURCHASE.inputFormat);
    });
  }
}

export default ValidatePurchaseProducts;
