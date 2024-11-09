import StoreInput from '../view/StoreInput.js';
import StoreOutput from '../view/StoreOutput.js';
import ValidateQuestion from '../validation/ValidateQuestion.js';

class PromotionPrice {
  static async setPromotionPrice(name, promotion, quantity, purchaseProducts, productsList, promotionsList) {
    const [promotionPrice, productPrice, promotionQuantity] = await this.calculatePromotionPrice(
      name,
      promotion,
      quantity,
      purchaseProducts,
      productsList,
      promotionsList
    );
    return [promotionPrice, productPrice * promotionQuantity];
  }

  // [ ] 리팩토링 예정
  static async calculatePromotionPrice(name, promotion, quantity, purchaseProducts, productsList, promotionsList) {
    const product = productsList[name]?.find((product) => product.promotion === promotion);
    if (promotionsList[promotion] === undefined) return [0, 0, 0];
    const promoDetails = promotionsList[promotion][0];
    const { buy, get } = promoDetails;
    const promoUnits = Math.floor(quantity / (buy + get));
    const totalGetUnits = promoUnits * get;
    if (quantity < buy + get) {
      const addQuantity = await this.inputAddProduct(name, quantity, buy, get, purchaseProducts, productsList);
      if (addQuantity === 0) return [0, 0, 0];
      return [((addQuantity + quantity) / (buy + get)) * product.price, product.price, totalGetUnits * (buy + get)];
    }
    if (product.quantity <= buy + get) return [0, 0, 0];
    return [totalGetUnits * product.price, product.price, totalGetUnits * (buy + get)];
  }

  static async inputAddProduct(name, quantity, buy, get, purchaseProducts, productsList) {
    const addProduct = await this.questionAddProduct(name, quantity, buy, get);
    if (addProduct === 'Y') return await this.setAddProduct(name, buy + get - quantity, purchaseProducts, productsList);
    return 0;
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

  static async setAddProduct(name, addQuantity, purchaseProducts, productsList) {
    const purchaseProduct = purchaseProducts.find((item) => item.product === name);
    if (purchaseProduct) purchaseProduct.quantity += addQuantity;
    const productListEntry = productsList[name]?.find((item) => item.name === name);
    if (productListEntry && productListEntry.quantity >= addQuantity) productListEntry.quantity -= addQuantity;
    return addQuantity;
  }
}

export default PromotionPrice;
