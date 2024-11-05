import StoreOutput from '../view/StoreOutput.js';
import ProductsList from '../model/ProductsList.js';

class StoreController {
  #productsList;

  constructor() {
    this.#productsList = new ProductsList();
  }

  async visitStore() {
    const products = this.#productsList.getProductsList('public/products.md');
    // [ ] 행사 목록도 파일을 받아서 불러올 것

    StoreOutput.readStoreInfoMessage();
    StoreOutput.readProductsList(products);
  }
}

export default StoreController;
