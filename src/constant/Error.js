const ERROR_FLAG = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  PURCHASE: Object.freeze({
    inputFormat: `${ERROR_FLAG} 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요.`,
    nonProducts: `${ERROR_FLAG} 존재하지 않는 상품입니다. 다시 입력해 주세요.`,
    zeroProducts: `${ERROR_FLAG} 구매 수량은 0 이하로 입력할 수 없습니다. 다시 입력해 주세요.`,
    stockProducts: `${ERROR_FLAG} 재고 수량을 초과하여 구매할 수 없습니다. 다시 입력해 주세요.`,
  }),
  QUESTION: Object.freeze({
    nonYesOrNo: `${ERROR_FLAG} Y 또는 N만 입력할 수 있습니다. 다시 입력해 주세요.`,
  }),
});
