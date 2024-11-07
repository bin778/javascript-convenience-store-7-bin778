class FormattedList {
  static formattedProductsList(products) {
    const result = [];
    this.processProducts(products, result);
    return result.join('\n');
  }

  static processProducts(products, result) {
    Object.keys(products).forEach((name) => {
      this.processItems(products[name], name, result);
    });
  }

  static processItems(items, name, result) {
    items.forEach((item) => {
      const formattedItem = this.formatProductsItem(name, item);
      result.push(formattedItem);
    });
  }

  static formatProductsItem(name, item) {
    let { price, quantity, promotion } = item;
    promotion = this.checkPromotion(promotion);
    const printQuantity = this.checkQuantity(quantity);
    return `- ${name} ${price.toLocaleString()}원 ${printQuantity} ${promotion}`;
  }

  static checkPromotion(promotion) {
    if (!promotion) return '';
    return promotion;
  }
  static checkQuantity(quantity) {
    if (quantity === 0) return '재고 없음';
    return `${quantity}개`;
  }
}

export default FormattedList;
