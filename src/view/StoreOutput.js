import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/Message.js';

class StoreOutput {
  static readStoreInfoMessage() {
    Console.print(MESSAGE.OUTPUT.INFO_MESSAGE);
  }
}

export default StoreOutput;
