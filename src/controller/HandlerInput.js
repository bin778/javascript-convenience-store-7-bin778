import ValidatePurchaseProducts from '../validation/ValidatePurchaseProducts.js';
import PurchaseProducts from '../model/PurchaseProducts.js';

class HandlerInput {
  #purchaseProducts;

  constructor() {
    this.#purchaseProducts = new PurchaseProducts();
  }

  async handlePurchaseProducts(purchaseProductsArr) {
    ValidatePurchaseProducts.validateInputFormat(purchaseProductsArr);
    const purchaseProducts = this.#purchaseProducts.getPurchaseProducts(purchaseProductsArr);
    console.log(purchaseProducts);
  }
}

export default HandlerInput;
