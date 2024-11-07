class PromotionPrice {
  #promotionPrice;

  constructor() {
    this.#promotionPrice = 0;
  }

  static setPromotionPrice(name, promotion, quantity, productsList, promotionsList) {
    // [ ] 프로모션은 N개 구매(1+1, 2+1) 작성
    console.log(name, promotion, quantity);
  }
}

export default PromotionPrice;
