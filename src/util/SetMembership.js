import StoreInput from '../view/StoreInput.js';
import StoreOutput from '../view/StoreOutput.js';
import ValidateQuestion from '../validation/ValidateQuestion.js';
import { MEMBERSHIP } from '../constant/Data.js';

class SetMemebership {
  static async setMemebership(purchaseProducts, productsList) {
    const totalPrice = await this.calculateTotalPrice(purchaseProducts, productsList);
    const isMembership = await this.inputMembership();
    if (isMembership === 'N') return [totalPrice, 0];
    const membershipPrice = await this.calculateMembership(totalPrice);
    return [totalPrice, membershipPrice];
  }

  static async calculateTotalPrice(purchaseProducts, productsList) {
    let totalPrice = 0;
    purchaseProducts.forEach(({ product, quantity }) => {
      const productOptions = productsList[product];
      productOptions.find((item) => (totalPrice += item.price * quantity));
    });
    return totalPrice;
  }

  static async inputMembership() {
    while (true) {
      try {
        const isMembership = await StoreInput.asyncAddMembership();
        ValidateQuestion.validateYesOrNo(isMembership);
        return isMembership;
      } catch (error) {
        StoreOutput.printErrorMessage(error);
      }
    }
  }

  static async calculateMembership(totalPrice) {
    let totalMembership = totalPrice * MEMBERSHIP.membershipDiscount;
    if (totalMembership > MEMBERSHIP.membershipMax) return MEMBERSHIP.membershipMax;
    return totalMembership;
  }
}

export default SetMemebership;
