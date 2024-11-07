class PromotionPrice {
  #promotionPrice;

  constructor() {
    this.#promotionPrice = 0;
  }

  static setPromotionPrice(name, promotion, quantity, productsList, promotionsList) {
    const promotionPrice = this.calculatePromotionPrice(name, promotion, quantity, productsList, promotionsList);
    return promotionPrice;
  }

  static calculatePromotionPrice(name, promotion, quantity, productsList, promotionsList) {
    const product = productsList[name]?.find((product) => product.promotion === promotion);
    const promoDetails = promotionsList[promotion][0];
    const { buy, get } = promoDetails;
    const promoUnits = Math.floor(quantity / (buy + get));
    const totalGetUnits = promoUnits * get;
    return totalGetUnits * product.price;
  }
}

export default PromotionPrice;
