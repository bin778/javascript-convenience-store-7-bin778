import { DateTimes } from '@woowacourse/mission-utils';

class SetPromotion {
  static setPromotion(purchaseProducts, productsList, promotionsList) {
    const matchPromotion = this.findMatchingPromotion(purchaseProducts, productsList);
    const matchDatePromotion = this.findMatchingDate(matchPromotion, promotionsList);
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
}

export default SetPromotion;
