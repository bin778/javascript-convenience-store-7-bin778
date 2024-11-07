import fs from 'fs';
import { PRODUCTS } from '../constant/Data.js';
import { REGEX } from '../constant/Regex.js';

class ProductsList {
  #productsList;

  constructor() {
    this.#productsList = {};
  }

  getProductsList(path) {
    const fsProducts = this.readFileProducts(path);
    const splitedProducts = this.splitProducts(fsProducts);
    this.parseProducts(splitedProducts);
    this.addPromotionToNull(this.#productsList);
    const productsList = this.#productsList;
    return productsList;
  }

  readFileProducts(path) {
    return fs.readFileSync(path, 'utf8');
  }

  splitProducts(fsProducts) {
    const splitRegex = REGEX.splitRegex;
    return fsProducts.split(splitRegex).filter(Boolean);
  }

  parseProducts(splitedProducts) {
    const header = splitedProducts.slice(0, PRODUCTS.productsInfo);
    const item = splitedProducts.slice(PRODUCTS.productsInfo);
    item.forEach((_, index) => {
      this.matchItemToIndex(header, item, index);
    });
  }

  matchItemToIndex(header, item, index) {
    if (index % PRODUCTS.productsInfo === 0) {
      let [name, price, quantity, promotion] = item.slice(index, index + PRODUCTS.productsInfo);
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

  addPromotionToNull(productsList) {
    for (const key in productsList) {
      if (!this.hasNullPromotion(productsList[key])) {
        this.addNullPromotion(productsList[key]);
      }
    }
  }

  hasNullPromotion(products) {
    return products.some((item) => item.promotion === null);
  }

  addNullPromotion(products) {
    const { name, price } = products[0];
    products.push({
      name,
      price,
      quantity: 0,
      promotion: null,
    });
  }
}

export default ProductsList;
