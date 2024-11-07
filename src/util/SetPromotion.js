class SetPromotion {
  static setPromotion(purchaseProducts, productsList, promotionsList) {
    const matchPromotion = this.findMatchingPromotion(purchaseProducts, productsList);
    console.log(matchPromotion);
  }

  static findMatchingPromotion(purchaseProducts, productsList) {
    const result = {};
    purchaseProducts.forEach(({ product }) => {
      const productPromotions = productsList[product]
        ?.map(({ promotion }) => promotion)
        .filter((promo) => promo !== null);
      if (productPromotions.length > 0) result[product] = productPromotions[0];
      else result[product] = null;
    });
    return result;
  }
}

export default SetPromotion;
