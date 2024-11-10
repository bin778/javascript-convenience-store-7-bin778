import { MESSAGE } from '../constant/Message.js';
import { Console } from '@woowacourse/mission-utils';

class StoreInput {
  static async readPurchaseProducts() {
    return Console.readLineAsync(MESSAGE.INPUT.QUANTITY);
  }

  static async readAddProduct(name, addQuantity) {
    const message = MESSAGE.INPUT.ADD_PRODUCT.replace('{name}', name).replace('{addQuantity}', addQuantity);
    return Console.readLineAsync(message);
  }

  static async readOutStock(name, minusQuantity) {
    const message = MESSAGE.INPUT.OUT_STOCK.replace('{name}', name).replace('{minusQuantity}', minusQuantity);
    return Console.readLineAsync(message);
  }

  static async readAddMembership() {
    return Console.readLineAsync(MESSAGE.INPUT.MEMBERSHIP);
  }

  static async readRePurchase() {
    return Console.readLineAsync(MESSAGE.INPUT.RE_PURCHASE);
  }
}

export default StoreInput;
