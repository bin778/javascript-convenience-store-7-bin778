import StoreOutput from '../view/StoreOutput.js';
import ProductsList from '../model/ProductsList.js';

class StoreController {
  #productsList;

  constructor() {
    this.#productsList = new ProductsList();
  }

  async visitStore() {
    const products = this.#productsList.getProductsList('public/products.md');

    StoreOutput.readStoreInfoMessage();
  }
}

export default StoreController;
