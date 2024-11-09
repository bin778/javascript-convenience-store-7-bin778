# 프리코스 4주차 과제 - 편의점

> 우아한테크코스 7기 프리코스 4주차 과제 - 편의점을 구현한 저장소입니다.

## 요구 사항

### 구현

- [x] 보유하고 있는 재고 목록과 행사 목록을 불러온다.
  - [x] public/products.md과 public/promotions.md 파일를 이용하여 불러온다.
  - [x] products.md에서 리스트가 프로모션 행사 리스트만 있을 경우 재고 없음 리스트를 추가한다.
- [x] 편의점 안내 메시지를 출력한다.
- [x] 보유하고 있는 재고 목록을 출력한다.
- [x] 사용자에게 구매할 상품과 수량을 입력받는다.
  - [x] 이때 상품명, 수량은 하이픈(-)으로, 개별 상품은 대괄호([])로 묶어 쉼표(,)로 구분한다. `[콜라-10],[사이다-3]`
  - [x] 상품명이나 수량이 형식에 맞으면 객체에 담는다.
  - [x] 각 상품의 재고 수량을 고려하여 결제 가능 여부를 확인한다.
  - [x] 구매한 상품은 해당 상품의 재고를 차감하여 최신 재고 목록을 유지한다.
- [ ] 프로모션 확인
  - [x] 구입한 상품과 일치하는 프로모션을 찾는다(없을 경우 null).
  - [x] 현재 날짜가 프로모션 기간 내에 포함된 경우에만 할인을 적용한다.
  - [x] 프로모션은 N개 구매 시 1개를 무료로 제공한다.
  - [x] 1+1 또는 2+1 프로모션이 각각 지정된 상품에 적용되며, 동일 상품에 여러 프로모션이 적용되지 않는다.
  - [x] 프로모션 혜택은 프로모션 재고 내에서만 적용할 수 있다.
  - [x] 프로모션 기간 중이라면 프로모션 재고를 우선적으로 차감하며, 프로모션 재고가 부족할 경우에는 일반 재고를 사용한다.
  - [x] 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량보다 적게 가져온 경우, 그 수량만큼 추가 여부를 입력받는다.
    - [x] Y: 증정 받을 수 있는 상품을 추가한다.
    - [x] N: 증정 받을 수 있는 상품을 추가하지 않는다.
  - [ ] 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우, 일부 수량에 대해 정가로 결제할지 여부를 입력받는다.
    - [ ] Y: 일부 수량에 대해 정가로 결제한다.
    - [ ] N: 정가로 결제해야하는 수량만큼 제외한 후 결제를 진행한다.
- [x] 멤버십 할인
  - [x] 멤버십 할인 적용 여부를 입력 받는다.
    - [x] Y: 멤버십 할인을 적용한다.
    - [x] N: 멤버십 할인을 적용하지 않는다.
  - [x] 멤버십 회원은 프로모션 미적용 금액의 30%를 할인받는다.
  - [x] 프로모션 적용 후 남은 금액에 대해 멤버십 할인을 적용한다.
  - [ ] 멤버십 할인의 최대 한도는 8,000원이다.
- [ ] 영수증은 구매 내역과 할인을 요약하여 아래와 같이 출력한다.
  - [ ] 구매 상품 내역: 구매한 상품명, 수량, 가격
  - [ ] 증정 상품 내역: 프로모션에 따라 무료로 제공된 증정 상품의 목록
  - [ ] 금액 정보
    - [ ] 총구매액: 구매한 상품의 총 수량과 총 금액
    - [ ] 행사할인: 프로모션에 의해 할인된 금액
    - [ ] 멤버십할인: 멤버십에 의해 추가로 할인된 금액
    - [ ] 내실돈: 최종 결제 금액
- [ ] 추가 구매 여부
  - [ ] 추가 구매 여부를 입력받는다.
    - [ ] Y: 재고가 업데이트된 상품 목록을 확인 후 추가로 구매를 진행한다(처음부터 반복).
    - [ ] N: 구매를 종료한다(애플리케이션 종료).

### 구조

- [ ] airbnb 코드 컨벤션을 준수한다.
- [ ] indent depth는 2까지만 허용한다.
- [ ] 3항 연산자나 else 사용을 지양한다.
- [ ] 함수는 한 가지 일만 하도록 작게 만들며 10라인이 넘어가지 않도록 한다.
- [ ] Jest를 이용하여 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI 로직은 제외한다.
- [ ] 입출력을 담당하는 클래스를 별도로 구현한다.
  - [ ] 아래 InputView, OutputView 클래스를 참고하여 입출력 클래스를 구현한다.
  - [ ] 클래스 이름, 메소드 반환 유형, 시그니처 등은 자유롭게 수정할 수 있다.

```
  const InputView = {
      async readItem() {
          const input = await MissionUtils.Console.readLineAsync("구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])");
          // ...
      }
      // ...
  }
```

```
  const OutputView = {
      printProducts() {
          MissionUtils.Console.print("- 콜라 1,000원 10개 탄산2+1");
          // ...
      }
      // ...
  }
```

### 예외 테스트

- [x] 사용자가 잘못된 값을 입력했을 때, "[ERROR]"로 시작하는 상황에 맞는 에러 메시지를 출력한다.
- [x] 에러가 발생하면 해당 지점부터 다시 입력받는다.
- [x] 구매할 상품과 수량 입력
  - [x] 구매할 상품과 수량 형식이 올바르지 않은 경우
  - [x] 재고에 없는 상품을 입력한 경우
  - [x] 구매 수량을 0 이하로 입력한 경우
  - [x] 구매 수량이 재고 수량보다 많은 경우
- [x] Y/N 입력
  - [x] Y나 N 이외의 값을 입력한 경우
- [x] 동일한 예외 처리가 있을 경우 중복하지 않고 재사용한다.

### 라이브러리

- [ ] `@woowacourse/mission-utils`에서 제공하는 `Console` 및 `DateTimes` API를 사용하여 구현해야 한다.
  - [x] 현재 날짜와 시간을 가져오려면 `DateTimes`의 `now()`를 활용한다.
  - [ ] 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

## 실행 결과 예시

```
안녕하세요. W편의점입니다.
현재 보유하고 있는 상품입니다.

- 콜라 1,000원 10개 탄산2+1
- 콜라 1,000원 10개
- 사이다 1,000원 8개 탄산2+1
- 사이다 1,000원 7개
- 오렌지주스 1,800원 9개 MD추천상품
- 오렌지주스 1,800원 재고 없음
- 탄산수 1,200원 5개 탄산2+1
- 탄산수 1,200원 재고 없음
- 물 500원 10개
- 비타민워터 1,500원 6개
- 감자칩 1,500원 5개 반짝할인
- 감자칩 1,500원 5개
- 초코바 1,200원 5개 MD추천상품
- 초코바 1,200원 5개
- 에너지바 2,000원 5개
- 정식도시락 6,400원 8개
- 컵라면 1,700원 1개 MD추천상품
- 컵라면 1,700원 10개

구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])
[콜라-3],[에너지바-5]

멤버십 할인을 받으시겠습니까? (Y/N)
Y

===========W 편의점=============
상품명		수량	금액
콜라		3 	3,000
에너지바 		5 	10,000
===========증	정=============
콜라		1
==============================
총구매액		8	13,000
행사할인			-1,000
멤버십할인			-3,000
내실돈			 9,000

감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)
Y

안녕하세요. W편의점입니다.
현재 보유하고 있는 상품입니다.

- 콜라 1,000원 7개 탄산2+1
- 콜라 1,000원 10개
- 사이다 1,000원 8개 탄산2+1
- 사이다 1,000원 7개
- 오렌지주스 1,800원 9개 MD추천상품
- 오렌지주스 1,800원 재고 없음
- 탄산수 1,200원 5개 탄산2+1
- 탄산수 1,200원 재고 없음
- 물 500원 10개
- 비타민워터 1,500원 6개
- 감자칩 1,500원 5개 반짝할인
- 감자칩 1,500원 5개
- 초코바 1,200원 5개 MD추천상품
- 초코바 1,200원 5개
- 에너지바 2,000원 재고 없음
- 정식도시락 6,400원 8개
- 컵라면 1,700원 1개 MD추천상품
- 컵라면 1,700원 10개

구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])
[콜라-10]

현재 콜라 4개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)
Y

멤버십 할인을 받으시겠습니까? (Y/N)
N

===========W 편의점=============
상품명		수량	금액
콜라		10 	10,000
===========증	정=============
콜라		2
==============================
총구매액		10	10,000
행사할인			-2,000
멤버십할인			-0
내실돈			 8,000

감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)
Y

안녕하세요. W편의점입니다.
현재 보유하고 있는 상품입니다.

- 콜라 1,000원 재고 없음 탄산2+1
- 콜라 1,000원 7개
- 사이다 1,000원 8개 탄산2+1
- 사이다 1,000원 7개
- 오렌지주스 1,800원 9개 MD추천상품
- 오렌지주스 1,800원 재고 없음
- 탄산수 1,200원 5개 탄산2+1
- 탄산수 1,200원 재고 없음
- 물 500원 10개
- 비타민워터 1,500원 6개
- 감자칩 1,500원 5개 반짝할인
- 감자칩 1,500원 5개
- 초코바 1,200원 5개 MD추천상품
- 초코바 1,200원 5개
- 에너지바 2,000원 재고 없음
- 정식도시락 6,400원 8개
- 컵라면 1,700원 1개 MD추천상품
- 컵라면 1,700원 10개

구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])
[오렌지주스-1]

현재 오렌지주스은(는) 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)
Y

멤버십 할인을 받으시겠습니까? (Y/N)
Y

===========W 편의점=============
상품명		수량	금액
오렌지주스		2 	3,600
===========증	정=============
오렌지주스		1
==============================
총구매액		2	3,600
행사할인			-1,800
멤버십할인			-0
내실돈			 1,800

감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)
N
```
