import fs from 'fs';

class ProductsList {
  #productsList;

  constructor() {
    this.#productsList = {};
  }

  getProductsList(path) {
    const fsProducts = this.readFileProducts(path);
    const splitedProducts = this.splitProducts(fsProducts);
    this.parseProducts(splitedProducts);
    return this.#productsList;
  }

  readFileProducts(path) {
    return fs.readFileSync(path, 'utf8');
  }

  splitProducts(fsProducts) {
    const splitRegex = /[\r\n,|]/;
    return fsProducts.split(splitRegex).filter(Boolean);
  }

  parseProducts(splitedProducts) {
    const header = splitedProducts.slice(0, 4);
    const item = splitedProducts.slice(4);
    item.forEach((_, index) => {
      this.matchItemToIndex(header, item, index);
    });
  }

  matchItemToIndex(header, item, index) {
    if (index % 4 === 0) {
      let [name, price, quantity, promotion] = item.slice(index, index + 4);
      this.createObject(this.#productsList, name);
      promotion = this.isNullPromotion(promotion);
      this.pushObject(this.#productsList, header, name, price, quantity, promotion);
    }
  }

  createObject(productsList, name) {
    if (!productsList[name]) productsList[name] = [];
  }

  isNullPromotion(promotion) {
    if (promotion === 'null') return null;
    return promotion;
  }

  pushObject(productsList, header, name, price, quantity, promotion) {
    productsList[name].push({
      [header[0]]: name,
      [header[1]]: parseInt(price),
      [header[2]]: parseInt(quantity),
      [header[3]]: promotion,
    });
  }
}

export default ProductsList;
