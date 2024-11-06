import ValidatePurchaseProducts from '../src/validation/ValidatePurchaseProducts.js';
import { ERROR_MESSAGE } from '../src/constant/Error.js';

describe('구매할 상품과 수량을 입력받는 테스트', () => {
  test.each([
    [['콜라-10]', '사이다-3]']],
    [['[사이다-1]', '[사이다-2]', '[오렌지쥬스10]']],
    [['[콜라-10][사이다-3]']],
    [['(오렌지쥬스-10)']],
    [['[콜라+8]']],
  ])('입력 형식이 맞지 않는 경우', (input) => {
    expect(() => {
      ValidatePurchaseProducts.validateInputFormat(input);
    }).toThrow(ERROR_MESSAGE.PURCHASE.inputFormat);
  });

  test.each([[[{ product: '콜라' }]], [[{ product: '오렌지쥬스' }]]])('재고에 없는 상품인 경우', (purchaseProducts) => {
    const products = { 오렌지주스: [{ name: '오렌지주스' }] };
    expect(() => {
      ValidatePurchaseProducts.validateNonProducts(purchaseProducts, products);
    }).toThrow(ERROR_MESSAGE.PURCHASE.nonProducts);
  });

  test.each([[[{ quantity: -10 }]], [[{ quantity: 0 }]]])('구매 수량이 0이하인 경우', (input) => {
    expect(() => {
      ValidatePurchaseProducts.validateZeroProducts(input);
    }).toThrow(ERROR_MESSAGE.PURCHASE.zeroProducts);
  });

  test.each([
    [[{ product: '라면', quantity: 11 }], { 라면: [{ name: '라면', quantity: 10 }] }],
    [
      [{ product: '콜라', quantity: 25 }],
      {
        콜라: [
          { name: '콜라', quantity: 12 },
          { name: '콜라', quantity: 10 },
        ],
      },
    ],
  ])('구매 수량이 재고 수량보다 많은 경우', (purchaseProducts, products) => {
    expect(() => {
      ValidatePurchaseProducts.validateStockProducts(purchaseProducts, products);
    }).toThrow(ERROR_MESSAGE.PURCHASE.stockProducts);
  });
});
