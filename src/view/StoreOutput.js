import { MESSAGE } from '../constant/Message.js';
import { Console } from '@woowacourse/mission-utils';
import FormattedList from '../util/FormattedList.js';

class StoreOutput {
  static printStoreInfoMessage() {
    Console.print(MESSAGE.OUTPUT.INFO_MESSAGE);
  }

  static printProductsList(products) {
    const formattedList = FormattedList.formattedProductsList(products);
    Console.print(formattedList);
  }

  static printReceipt(totalPrice, promotionPrice, membershipPrice, purchaseProducts, productsList, promotionsList) {
    Console.print(MESSAGE.RECEIPT.HEADER);
    Console.print(MESSAGE.RECEIPT.PURCHASE);
    this.printPurchaseList(purchaseProducts, productsList);
    Console.print(MESSAGE.RECEIPT.PROMOTION);
    this.printPromotionList(purchaseProducts, productsList, promotionsList);
    Console.print(MESSAGE.RECEIPT.FOOTER);
    this.printTotalList(totalPrice, promotionPrice, membershipPrice, purchaseProducts);
  }

  static printPurchaseList(purchaseProducts, productsList) {
    purchaseProducts.forEach(({ product, quantity }) => {
      const productInfo = productsList[product];
      const { totalPrice, actualQuantity } = this.calculateTotalPriceAndQuantity(productInfo, quantity);
      Console.print(`${product}\t${actualQuantity}\t${totalPrice.toLocaleString()}`);
    });
  }

  static printPromotionList(purchaseProducts, productsList, promotionsList) {
    purchaseProducts.forEach(({ product, quantity }) => {
      const productInfo = productsList[product];
      const promotionName = productInfo[0].promotion;
      let giftedQuantity = 0;
      if (promotionName && promotionsList[promotionName]) {
        const { buy, get } = promotionsList[promotionName][0];
        giftedQuantity = Math.trunc(quantity / (buy + get));
      }
      if (giftedQuantity > 0) {
        console.log(`${product}\t${giftedQuantity}`);
      }
    });
  }

  static calculateTotalPriceAndQuantity(productInfo, quantity) {
    const actualQuantity = quantity;
    const { price } = productInfo[0];
    const totalPrice = quantity * price;
    return { totalPrice, actualQuantity };
  }

  static printErrorMessage(error) {
    Console.print(error.message);
  }

  static printTotalList(totalPrice, promotionPrice, membershipPrice, purchaseProducts) {
    const totalQuantity = purchaseProducts.reduce((sum, { quantity }) => sum + quantity, 0);
    const changePrice = totalPrice - promotionPrice - membershipPrice;
    Console.print(`총구매액\t${totalQuantity}\t${totalPrice.toLocaleString()}`);
    Console.print(`행사할인\t\t-${promotionPrice.toLocaleString()}`);
    Console.print(`멤버쉽할인\t\t-${membershipPrice.toLocaleString()}`);
    Console.print(`내실돈\t\t${changePrice.toLocaleString()}`);
  }
}

export default StoreOutput;
