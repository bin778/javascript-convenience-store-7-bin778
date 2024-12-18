import ValidatePurchaseProducts from '../validation/ValidatePurchaseProducts.js';
import PurchaseProducts from '../model/PurchaseProducts.js';

class HandlerInput {
  #purchaseProducts;

  constructor() {
    this.#purchaseProducts = new PurchaseProducts();
  }

  async handlePurchaseProducts(purchaseProductsArr, products) {
    ValidatePurchaseProducts.validateInputFormat(purchaseProductsArr);
    const purchaseProducts = this.#purchaseProducts.getPurchaseProducts(purchaseProductsArr);
    ValidatePurchaseProducts.validateNonProducts(purchaseProducts, products);
    ValidatePurchaseProducts.validateZeroProducts(purchaseProducts);
    ValidatePurchaseProducts.validateStockProducts(purchaseProducts, products);
    return purchaseProducts;
  }
}

export default HandlerInput;
