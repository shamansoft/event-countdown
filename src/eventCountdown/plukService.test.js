import {zeroDateHours, zeroDate} from './time.js';
import * as sut from './plukService.js';

const UTC_P_START_HOUR = 3;
const UTC_P_END_HOUR = 15;

test('pluk 2030', () => {
  const expectedDate = zeroDateHours(27,"Jun",2030,UTC_P_START_HOUR);
  expect(sut.getForYear(2030).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2024', () => {
  const expectedDate = zeroDateHours(27,"Jun",2024,UTC_P_START_HOUR);
  expect(sut.getForYear(2024).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2021', () => {
  const expectedDate = zeroDateHours(24,"Jun",2021,UTC_P_START_HOUR);
  expect(sut.getForYear(2021).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2019', () => {
  const expectedDate = zeroDateHours(27,"Jun",2019,UTC_P_START_HOUR);
  expect(sut.getForYear(2019).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2018', () => {
  const expectedDate = zeroDateHours(21,"Jun",2018,UTC_P_START_HOUR);
  expect(sut.getForYear(2018).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2017', () => {
  const expectedDate = zeroDateHours(22,"Jun",2017,UTC_P_START_HOUR);
  expect(sut.getForYear(2017).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2014', () => {
  const expectedDate = zeroDateHours(26,"Jun",2014,UTC_P_START_HOUR);
  expect(sut.getForYear(2014).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2013', () => {
  const expectedDate = zeroDateHours(27,"Jun",2013,UTC_P_START_HOUR);
  expect(sut.getForYear(2013).startDate.toISOString()).toBe(expectedDate.toISOString());
});

// status

test('June 11 2018', () => {
    const expected = {
        status: "thisYear",
        startDate: zeroDateHours(21,"Jun",2018,UTC_P_START_HOUR),
        endDate: zeroDateHours(24,"Jun",2018,UTC_P_END_HOUR),
        daysLeft: 10,
        ruDays: "дней"
    }
    expect(sut.getStatus(zeroDate(11, "Jun", 2018))).toEqual(expected);
});

test('June 22 2018', () => {
    const expected = {
        status: "inProgress",
        startDate: zeroDateHours(21,"Jun",2018,UTC_P_START_HOUR),
        endDate: zeroDateHours(24,"Jun",2018,UTC_P_END_HOUR),
        daysLeft: 0,
        ruDays: "дней"
    }
    expect(sut.getStatus(zeroDate(22, "Jun", 2018))).toEqual(expected);
});

test('July 1 2018', () => {
    const expected = {
        status: "nextYear",
        startDate: zeroDateHours(27,"Jun",2019,UTC_P_START_HOUR),
        endDate: zeroDateHours(30,"Jun",2019,UTC_P_END_HOUR),
        daysLeft: 361,
        ruDays: "день"
    }
    expect(sut.getStatus(zeroDate(1, "Jul", 2018))).toEqual(expected);
});