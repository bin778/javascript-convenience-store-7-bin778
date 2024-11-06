const ERROR_FLAG = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  PURCHASE: Object.freeze({
    inputFormat: `${ERROR_FLAG} 입력 형식에 맞게 입력해야 합니다. 다시 입력해 주세요.`,
    nonProducts: `${ERROR_FLAG} 재고 목록에 없는 상품입니다. 다시 입력해 주세요.`,
    zeroProducts: `${ERROR_FLAG} 구매 수량은 0 이하로 입력할 수 없습니다. 다시 입력해 주세요.`,
    stockProducts: `${ERROR_FLAG} 재고 수량을 초과하여 구매할 수 없습니다. 다시 입력해 주세요.`,
  }),
});
