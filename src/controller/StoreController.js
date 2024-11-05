import StoreOutput from '../view/StoreOutput.js';

class StoreController {
  async visitStore() {
    StoreOutput.readStoreInfoMessage();
  }
}

export default StoreController;
