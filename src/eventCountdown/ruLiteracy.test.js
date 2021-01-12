import {daysRu} from './ruLiteracy.js'

test('check День', () => {
  expect(daysRu(1)).toBe("день");
  expect(daysRu(21)).toBe("день");
  expect(daysRu(31)).toBe("день");
  expect(daysRu(41)).toBe("день");
  expect(daysRu(91)).toBe("день");
  expect(daysRu(101)).toBe("день");
  expect(daysRu(1231)).toBe("день");
  expect(daysRu(98981)).toBe("день");
  expect(daysRu(9001)).toBe("день");
});

test('check Дня', () => {
  expect(daysRu(2)).toBe("дня");
  expect(daysRu(3)).toBe("дня");
  expect(daysRu(4)).toBe("дня");
  expect(daysRu(22)).toBe("дня");
  expect(daysRu(43)).toBe("дня");
  expect(daysRu(94)).toBe("дня");
  expect(daysRu(1004)).toBe("дня");
  expect(daysRu(852)).toBe("дня");
});

test('check Дней', () => {
  expect(daysRu(6)).toBe("дней");
  expect(daysRu(7)).toBe("дней");
  expect(daysRu(8)).toBe("дней");
  expect(daysRu(9)).toBe("дней");
  expect(daysRu(0)).toBe("дней");
  expect(daysRu(10)).toBe("дней");
  expect(daysRu(11)).toBe("дней");
  expect(daysRu(12)).toBe("дней");
  expect(daysRu(13)).toBe("дней");
  expect(daysRu(14)).toBe("дней");
  expect(daysRu(10014)).toBe("дней");
  expect(daysRu(3985)).toBe("дней");
});