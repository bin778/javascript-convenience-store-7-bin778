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

  static validateZeroProducts(purchaseProducts) {
    const checkZeroProducts = purchaseProducts.some((item) => item.quantity > 0);
    if (!checkZeroProducts) throw new Error(ERROR_MESSAGE.PURCHASE.zeroProducts);
  }

  static validateStockProducts(purchaseProducts, product) {
    const checkStockProducts = purchaseProducts.every((purchase) => {
      const stockItem = product[purchase.product];
      const totalStock = stockItem.reduce((sum, item) => sum + item.quantity, 0);
      return purchase.quantity <= totalStock;
    });
    if (!checkStockProducts) throw new Error(ERROR_MESSAGE.PURCHASE.stockProducts);
  }
}

export default ValidatePurchaseProducts;
