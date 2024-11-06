import { ERROR_MESSAGE } from '../constant/Error.js';

class validateQuantity {
  static validateInputFormat(quantity_arr) {
    const format_regex = /^\[[^\[\]-]+-\d+\]$/;
    quantity_arr.forEach((item) => {
      if (!format_regex.test(item)) throw new Error(ERROR_MESSAGE.QUANTITY.inputFormat);
    });
  }
}

export default validateQuantity;
