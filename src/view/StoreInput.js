import { MESSAGE } from '../constant/Message.js';
import { Console } from '@woowacourse/mission-utils';

class StoreInput {
  static async readQuantity() {
    return Console.readLineAsync(MESSAGE.INPUT.QUANTITY);
  }
}

export default StoreInput;
