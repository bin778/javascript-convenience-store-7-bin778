import { ERROR_MESSAGE } from '../constant/Error.js';

class ValidateQuestion {
  static validateYesOrNo(question) {
    if (!(question === 'Y' || question === 'N')) throw new Error(ERROR_MESSAGE.QUESTION.nonYesOrNo);
  }
}

export default ValidateQuestion;
