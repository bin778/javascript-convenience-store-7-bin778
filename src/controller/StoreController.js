import StoreOutput from '../view/StoreOutput.js';
import StoreInput from '../view/StoreInput.js';
import ProductsList from '../model/ProductsList.js';
import PromotionsList from '../model/PromotionsList.js';
import HandlerInput from './HandlerInput.js';
import SubstractProducts from '../util/SubtractProducts.js';
import SetPromotion from '../util/SetPromotion.js';
import SetMemebership from '../util/SetMembership.js';
import ValidateQuestion from '../validation/ValidateQuestion.js';

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
    // while (true) {
    this.printHeader(productsList);
    const purchaseProducts = await this.inputPurchaseProducts(productsList);
    const [promotionPrice, promotionTotalPrice] = await this.setPromotionPrice(
      purchaseProducts,
      productsList,
      promotionsList
    );
    const [totalPrice, membershipPrice] = await this.setMemebershipPrice(
      purchaseProducts,
      productsList,
      promotionTotalPrice
    );
    this.printResult(totalPrice, promotionPrice, membershipPrice, purchaseProducts, productsList, promotionsList);
    // const rePurchase = await this.inputRePurchase();
    // if (rePurchase === 'N') return;
    // }
  }

  createList() {
    const productsList = this.#productsList.getProductsList('public/products.md');
    const promotionsList = this.#promotionsList.getPromotionList('public/promotions.md');
    return [productsList, promotionsList];
  }

  printHeader(productsList) {
    StoreOutput.printStoreInfoMessage();
    StoreOutput.printProductsList(productsList);
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

  async setMemebershipPrice(purchaseProducts, productsList, promotionTotalPrice) {
    return await SetMemebership.setMemebership(purchaseProducts, productsList, promotionTotalPrice);
  }

  printResult(totalPrice, promotionPrice, membershipPrice, purchaseProducts, productsList, promotionsList) {
    StoreOutput.printReceipt(
      totalPrice,
      promotionPrice,
      membershipPrice,
      purchaseProducts,
      productsList,
      promotionsList
    );
  }

  async inputRePurchase() {
    while (true) {
      try {
        const rePurchase = await StoreInput.readRePurchase();
        ValidateQuestion.validateYesOrNo(rePurchase);
        return rePurchase;
      } catch (error) {
        StoreOutput.printErrorMessage(error);
      }
    }
  }
}

export default StoreController;
