import { MESSAGE } from '../constant/Message.js';
import { Console } from '@woowacourse/mission-utils';

class StoreInput {
  static async readPurchaseProducts() {
    return Console.readLineAsync(MESSAGE.INPUT.QUANTITY);
  }

  static async readAddProduct(name, add_quantity) {
    const message = MESSAGE.INPUT.ADD_PRODUCT.replace('{name}', name).replace('{add_quantity}', add_quantity);
    return Console.readLineAsync(message);
  }
}

export default StoreInput;
