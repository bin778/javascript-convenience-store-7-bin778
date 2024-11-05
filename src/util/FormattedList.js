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
    if (!promotion) promotion = '';
    return `- ${name} ${price.toLocaleString()}원 ${quantity}개 ${promotion}`;
  }
}

export default FormattedList;
