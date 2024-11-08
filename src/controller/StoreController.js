import StoreOutput from '../view/StoreOutput.js';
import StoreInput from '../view/StoreInput.js';
import ProductsList from '../model/ProductsList.js';
import PromotionsList from '../model/PromotionsList.js';
import HandlerInput from './HandlerInput.js';
import SubstractProducts from '../util/SubtractProducts.js';
import SetPromotion from '../util/SetPromotion.js';

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
    const [productsList, promotionsList] = this.createList();
    this.printHeader(productsList);
    const purchaseProducts = await this.inputPurchaseProducts(productsList);
    const promotionPrice = await this.setPromotionPrice(purchaseProducts, productsList, promotionsList);
  }

  createList() {
    const productsList = this.#productsList.getProductsList('public/products.md');
    const promotionsList = this.#promotionsList.getPromotionList('public/promotions.md');
    return [productsList, promotionsList];
  }

  printHeader(productsList) {
    StoreOutput.readStoreInfoMessage();
    StoreOutput.readProductsList(productsList);
  }

  async inputPurchaseProducts(productsList) {
    while (true) {
      try {
        const purchaseProductsInput = await StoreInput.readPurchaseProducts();
        const purchaseProductsArr = purchaseProductsInput.split(',');
        return await this.#handlerInput.handlePurchaseProducts(purchaseProductsArr, productsList);
      } catch (error) {
        StoreOutput.printErrorMessage(error);
      }
    }
  }

  async setPromotionPrice(purchaseProducts, productsList, promotionsList) {
    const promotionPrice = await SetPromotion.setPromotion(purchaseProducts, productsList, promotionsList);
    SubstractProducts.substractProducts(purchaseProducts, productsList);
    return promotionPrice;
  }
}

export default StoreController;
