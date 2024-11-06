import { ERROR_MESSAGE } from '../constant/Error.js';
import { REGEX } from '../constant/Regex.js';

class ValidatePurchaseProducts {
  static validateInputFormat(purchaseProducts) {
    purchaseProducts.forEach((item) => {
      if (!REGEX.formatRegex.test(item)) throw new Error(ERROR_MESSAGE.PURCHASE.inputFormat);
    });
  }

  static validateNonProducts(purchaseProducts, products) {
    const checkNonProducts = purchaseProducts.every((purchaseItem) =>
      products[purchaseItem.product]?.some((productItem) => productItem.name === purchaseItem.product)
    );
    if (!checkNonProducts) throw new Error(ERROR_MESSAGE.PURCHASE.nonProducts);
  }
}

export default ValidatePurchaseProducts;
