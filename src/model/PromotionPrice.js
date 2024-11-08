import StoreInput from '../view/StoreInput.js';
import StoreOutput from '../view/StoreOutput.js';
import ValidateQuestion from '../validation/ValidateQuestion.js';

class PromotionPrice {
  static setPromotionPrice(name, promotion, quantity, productsList, promotionsList) {
    const promotionPrice = this.calculatePromotionPrice(name, promotion, quantity, productsList, promotionsList);
    return promotionPrice;
  }

  static calculatePromotionPrice(name, promotion, quantity, productsList, promotionsList) {
    const product = productsList[name]?.find((product) => product.promotion === promotion);
    const promoDetails = promotionsList[promotion][0];
    const { buy, get } = promoDetails;
    const promoUnits = Math.floor(quantity / (buy + get));
    const totalGetUnits = promoUnits * get;
    if (quantity < buy + get) this.inputAddProduct(name, quantity, buy, get);
    if (product.quantity <= buy + get) return 0;
    return totalGetUnits * product.price;
  }

  static async inputAddProduct(name, quantity, buy, get) {
    const addProduct = this.questionAddProduct(name, quantity, buy, get);
    // if (addProduct === "Y") [ ] 상품 증정 로직 추가
  }

  static async questionAddProduct(name, quantity, buy, get) {
    while (true) {
      try {
        const addProduct = await StoreInput.readAddProduct(name, buy + get - quantity);
        ValidateQuestion.validateYesOrNo(addProduct);
        return addProduct;
      } catch (error) {
        StoreOutput.printErrorMessage(error);
      }
    }
  }
}

export default PromotionPrice;
