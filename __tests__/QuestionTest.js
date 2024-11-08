import ValidateQuestion from '../src/validation/ValidateQuestion.js';
import { ERROR_MESSAGE } from '../src/constant/Error.js';

describe('사용자 질문 응답 테스트', () => {
  test.each([[['1']], [['n']], [['.']], [['M']]])('Y나 N 이외의 값을 입력한 경우', (input) => {
    expect(() => {
      ValidateQuestion.validateYesOrNo(input);
    }).toThrow(ERROR_MESSAGE.QUESTION.nonYesOrNo);
  });
});
