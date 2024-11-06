import fs from 'fs';
import { PROMOTIONS } from '../constant/Data.js';

// [ ] ProductsList() 와의 반복 리팩토링
class PromotionsList {
  #promotionsList;

  constructor() {
    this.#promotionsList = {};
  }

  getPromotionList(path) {
    const fsPromotions = this.readFilePromotions(path);
    const splitedPromotions = this.splitPromotions(fsPromotions);
    this.parsePromotions(splitedPromotions);
    return this.#promotionsList;
  }

  readFilePromotions(path) {
    return fs.readFileSync(path, 'utf8');
  }

  splitPromotions(fsPromotions) {
    const splitRegex = /[\r\n,|]/;
    return fsPromotions.split(splitRegex).filter(Boolean);
  }

  parsePromotions(splitedPromotions) {
    const header = splitedPromotions.slice(0, PROMOTIONS.promotionsInfo);
    const item = splitedPromotions.slice(PROMOTIONS.promotionsInfo);
    item.forEach((_, index) => {
      this.matchItemToIndex(header, item, index);
    });
  }

  matchItemToIndex(header, item, index) {
    if (index % PROMOTIONS.promotionsInfo === 0) {
      const [name, buy, get, start_date, end_date] = item.slice(index, index + PROMOTIONS.promotionsInfo);
      this.createObject(this.#promotionsList, name);
      this.pushObject(this.#promotionsList, header, name, buy, get, start_date, end_date);
    }
  }

  createObject(promotionsList, name) {
    if (!promotionsList[name]) promotionsList[name] = [];
  }

  pushObject(promotionsList, header, name, buy, get, start_date, end_date) {
    promotionsList[name].push({
      [header[0]]: name,
      [header[1]]: parseInt(buy),
      [header[2]]: parseInt(get),
      [header[3]]: new Date(start_date),
      [header[4]]: new Date(end_date),
    });
  }
}

export default PromotionsList;
