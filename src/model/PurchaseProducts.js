import { REGEX } from '../constant/Regex.js';

class PurchaseProducts {
  #purchaseProducts;

  constructor() {
    this.#purchaseProducts = {};
  }

  getPurchaseProducts(purchaseProductsArr) {
    this.parsePurchaseProducts(purchaseProductsArr);
    const purchaseProducts = this.#purchaseProducts;
    return purchaseProducts;
  }

  parsePurchaseProducts(purchaseProductsArr) {
    this.#purchaseProducts = purchaseProductsArr
      .map((item) => {
        const match = item.match(REGEX.formatRegex);
        if (match) return { product: match[1], quantity: parseInt(match[2], 10) };
        return null;
      })
      .filter(Boolean);
  }
}

export default PurchaseProducts;
