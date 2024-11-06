class SubstractProducts {
  static substractProducts(purchaseProducts, products) {
    purchaseProducts.forEach(({ product: productName, quantity }) => {
      const stockItems = products[productName];
      this.updateProducts(stockItems, quantity);
    });
  }

  static updateProducts(stockItems, quantity) {
    for (const stockItem of stockItems) {
      if (quantity <= 0) break;
      quantity = this.substractItems(stockItem, quantity);
    }
  }

  static substractItems(stockItem, substractQuantity) {
    if (stockItem.quantity >= substractQuantity) {
      stockItem.quantity -= substractQuantity;
      return 0;
    } else {
      const remainQuantity = substractQuantity - stockItem.quantity;
      stockItem.quantity = 0;
      return remainQuantity;
    }
  }
}

export default SubstractProducts;
