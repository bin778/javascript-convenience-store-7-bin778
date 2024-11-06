const ERROR_FLAG = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  QUANTITY: Object.freeze({
    inputFormat: `${ERROR_FLAG} 입력 형식에 맞게 입력해야 합니다.`,
    nonProducts: `${ERROR_FLAG} 재고에 없는 상품입니다.`,
    moreProducts: `${ERROR_FLAG} 구매 수량이 재고 수량보다 많습니다.`,
    zeroProducts: `${ERROR_FLAG} 구매 수량은 0 이하로 입력할 수 없습니다.`,
    nullProducts: `${ERROR_FLAG} 구매할 상품과 수량에 누락된 값이 있습니다.`,
  }),
});
