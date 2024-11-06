import { MESSAGE } from '../constant/Message.js';
import { Console } from '@woowacourse/mission-utils';

class StoreInput {
  static async readProductQuantity() {
    return Console.readLineAsync(MESSAGE.INPUT.PRODUCT_QUANTITY);
  }
}

export default StoreInput;
