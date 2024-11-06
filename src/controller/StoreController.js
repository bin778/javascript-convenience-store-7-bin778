import StoreOutput from '../view/StoreOutput.js';
import StoreInput from '../view/StoreInput.js';
import ProductsList from '../model/ProductsList.js';
import PromotionsList from '../model/PromotionsList.js';
import HandlerInput from '../view/HandlerInput.js';

class StoreController {
  #productsList;
  #promotionsList;

  constructor() {
    this.#productsList = new ProductsList();
    this.#promotionsList = new PromotionsList();
  }

  async visitStore() {
    const products = this.#productsList.getProductsList('public/products.md');
    const promotions = this.#promotionsList.getPromotionList('public/promotions.md');

    StoreOutput.readStoreInfoMessage();
    StoreOutput.readProductsList(products);
    const quantity = await this.#inputQuantity();
    console.log(quantity);
  }

  async #inputQuantity() {
    while (true) {
      try {
        const quantityInput = await StoreInput.readQuantity();
        const quantityArr = quantityInput.split(',');
        HandlerInput.handleQuantityInput(quantityArr);
        return quantityArr;
      } catch (error) {
        StoreOutput.printErrorMessage(error);
      }
    }
  }
}

export default StoreController;
