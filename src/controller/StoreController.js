import StoreOutput from '../view/StoreOutput.js';
import StoreInput from '../view/StoreInput.js';
import ProductsList from '../model/ProductsList.js';
import PromotionsList from '../model/PromotionsList.js';
import HandlerInput from './HandlerInput.js';
import SubstractProducts from '../util/SubtractProducts.js';

class StoreController {
  #productsList;
  #promotionsList;
  #handlerInput;

  constructor() {
    this.#productsList = new ProductsList();
    this.#promotionsList = new PromotionsList();
    this.#handlerInput = new HandlerInput();
  }

  async visitStore() {
    const products = this.#productsList.getProductsList('public/products.md');
    const promotions = this.#promotionsList.getPromotionList('public/promotions.md');

    StoreOutput.readStoreInfoMessage();
    StoreOutput.readProductsList(products);
    const purchaseProducts = await this.#inputPurchaseProducts(products);
    SubstractProducts.substractProducts(purchaseProducts, products);
  }

  async #inputPurchaseProducts(products) {
    while (true) {
      try {
        const purchaseProductsInput = await StoreInput.readPurchaseProducts();
        const purchaseProductsArr = purchaseProductsInput.split(',');
        return await this.#handlerInput.handlePurchaseProducts(purchaseProductsArr, products);
      } catch (error) {
        StoreOutput.printErrorMessage(error);
      }
    }
  }
}

export default StoreController;
