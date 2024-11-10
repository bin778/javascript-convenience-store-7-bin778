export const MESSAGE = Object.freeze({
  INPUT: Object.freeze({
    QUANTITY: '\n구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])\n',
    ADD_PRODUCT: '\n현재 {name}은(는) {addQuantity}개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)\n',
    OUT_STOCK: `\n현재 {name} {minusQuantity}개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)\n`,
    MEMBERSHIP: `\n멤버십 할인을 받으시겠습니까? (Y/N)\n`,
    RE_PURCHASE: `\n감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)\n`,
  }),
  OUTPUT: Object.freeze({
    INFO_MESSAGE: '안녕하세요. W편의점입니다.\n현재 보유하고 있는 상품입니다.\n',
  }),
  RECEIPT: Object.freeze({
    HEADER: '\n===========W 편의점=============',
    PURCHASE: '상품명\t수량\t금액',
    PROMOTION: '===========증	정=============',
    FOOTER: '==============================',
  }),
});
