import * as helper from './time.js';
import * as sut from './plukService.js';

test('pluk 2030', () => {
  const expectedDate = helper.zeroDateHours(27,"Jun",2030,3);
  expect(sut.getForYear(2030).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2024', () => {
  const expectedDate = helper.zeroDateHours(27,"Jun",2024,3);
  expect(sut.getForYear(2024).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2021', () => {
  const expectedDate = helper.zeroDateHours(24,"Jun",2021,3);
  expect(sut.getForYear(2021).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2019', () => {
  const expectedDate = helper.zeroDateHours(27,"Jun",2019,3);
  expect(sut.getForYear(2019).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2018', () => {
  const expectedDate = helper.zeroDateHours(21,"Jun",2018,3);
  expect(sut.getForYear(2018).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2017', () => {
  const expectedDate = helper.zeroDateHours(22,"Jun",2017,3);
  expect(sut.getForYear(2017).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2014', () => {
  const expectedDate = helper.zeroDateHours(26,"Jun",2014,3);
  expect(sut.getForYear(2014).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2013', () => {
  const expectedDate = helper.zeroDateHours(27,"Jun",2013,3);
  expect(sut.getForYear(2013).startDate.toISOString()).toBe(expectedDate.toISOString());
});

// status

test('June 11 2018', () => {
    const expected = {
        status: "thisYear",
        startDate: helper.zeroDateHours(21,"Jun",2018,3),
        endDate: helper.zeroDateHours(24,"Jun",2018,15),
        daysLeft: 10,
        ruDays: "дней"
    }
    expect(sut.getStatus(helper.zeroDate(11, "Jun", 2018))).toEqual(expected);
});

test('June 22 2018', () => {
    const expected = {
        status: "inProgress",
        startDate: helper.zeroDateHours(21,"Jun",2018,3),
        endDate: helper.zeroDateHours(24,"Jun",2018,15),
        daysLeft: 0,
        ruDays: "дней"
    }
    expect(sut.getStatus(helper.zeroDate(22, "Jun", 2018))).toEqual(expected);
});

test('July 1 2018', () => {
    const expected = {
        status: "nextYear",
        startDate: helper.zeroDateHours(27,"Jun",2019,3),
        endDate: helper.zeroDateHours(30,"Jun",2019,15),
        daysLeft: 361,
        ruDays: "день"
    }
    expect(sut.getStatus(helper.zeroDate(1, "Jul", 2018))).toEqual(expected);
});