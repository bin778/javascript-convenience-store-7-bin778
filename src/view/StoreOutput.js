import { MESSAGE } from '../constant/Message.js';
import { Console } from '@woowacourse/mission-utils';
import FormattedList from '../util/FormattedList.js';

class StoreOutput {
  static readStoreInfoMessage() {
    Console.print(MESSAGE.OUTPUT.INFO_MESSAGE);
  }

  static readProductsList(products) {
    const formattedList = FormattedList.formattedProductsList(products);
    Console.print(formattedList);
  }

  static printErrorMessage(error) {
    Console.print(error.message);
  }
}

export default StoreOutput;
