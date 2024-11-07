import { DateTimes } from '@woowacourse/mission-utils';
import PromotionPrice from '../model/PromotionPrice.js';

class SetPromotion {
  static setPromotion(purchaseProducts, productsList, promotionsList) {
    const matchPromotion = this.findMatchingPromotion(purchaseProducts, productsList);
    const matchDatePromotion = this.findMatchingDate(matchPromotion, promotionsList);
    const filterProducts = this.filteredProducts(purchaseProducts, matchDatePromotion);
    const promotionPrice = this.addPromotion(filterProducts, matchDatePromotion, productsList, promotionsList);
    return promotionPrice;
  }

  static findMatchingPromotion(purchaseProducts, productsList) {
    const result = {};
    purchaseProducts.forEach(({ product }) => {
      const productPromotions = productsList[product]
        ?.map(({ promotion }) => promotion)
        .filter((promo) => promo !== null);
      result[product] = this.calculateLength(productPromotions);
    });
    return result;
  }

  static calculateLength(productPromotions) {
    if (productPromotions.length > 0) return productPromotions[0];
    return null;
  }

  static findMatchingDate(matchPromotion, promotionsList) {
    const result = {};
    const currentDate = DateTimes.now();
    Object.entries(matchPromotion).forEach(([product, promotionName]) => {
      if (promotionName && promotionsList[promotionName]) {
        const promotion = this.calculateDate(promotionsList, promotionName, currentDate);
        result[product] = this.isPromotion(promotion, promotionName);
      }
    });
    return result;
  }

  static calculateDate(promotionsList, promotionName, currentDate) {
    return promotionsList[promotionName].find(
      (promo) => currentDate >= promo.start_date && currentDate <= promo.end_date
    );
  }

  static isPromotion(promotion, promotionName) {
    if (promotion) return promotionName;
    return null;
  }

  static filteredProducts(purchaseProducts, matchDatePromotion) {
    return purchaseProducts.filter((item) => matchDatePromotion.hasOwnProperty(item.product));
  }

  static addPromotion(filterProducts, matchDatePromotion, productsList, promotionsList) {
    let promotionPrice = 0;
    let purchaseCount = 0;
    Object.entries(matchDatePromotion).forEach(([name, promotion]) => {
      const quantity = filterProducts[purchaseCount].quantity;
      promotionPrice += PromotionPrice.setPromotionPrice(name, promotion, quantity, productsList, promotionsList);
      purchaseCount += 1;
    });
    return promotionPrice;
  }
}

export default SetPromotion;
