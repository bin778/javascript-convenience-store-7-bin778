import StoreController from './controller/StoreController.js';

class App {
  async run() {
    const controller = new StoreController();
    await controller.visitStore();
  }
}

export default App;
