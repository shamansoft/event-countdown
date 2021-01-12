import * as sut from './time.js'

test('check Months', () => {
  expect(sut.getMonth('Jan')).toBe(0);
  expect(sut.getMonth('Dec')).toBe(11);
});

test('check Days', () => {
  expect(sut.getDay('Mo')).toBe(1);
  expect(sut.getDay('Su')).toBe(0);
  expect(sut.getDay('Sa')).toBe(6);
});

test('zero date today', () => {
  const now = new Date();
  const todayUTC = new Date(now.getTime() + now.getTimezoneOffset()*1000*60);
  const zeroToday = sut.zeroDate(now);
  console.log(zeroToday);
  console.log(zeroToday.getTime());
  expect(zeroToday.getTime()).toBeLessThan(todayUTC.getTime());
  expect(zeroToday.getUTCDate()).toBe(now.getDate());
  expect(zeroToday.getUTCFullYear()).toBe(now.getFullYear());
  expect(zeroToday.getUTCMinutes()).toBe(0);
  expect(zeroToday.getUTCHours()).toBe(0);
  expect(zeroToday.getUTCSeconds()).toBe(0);
  expect(zeroToday.getUTCMilliseconds()).toBe(0);
});

test('zero date 01 Jan 2018', () => {
  const zeroToday = sut.zeroDate(1, "Jan", 2018);
  expect(zeroToday.toUTCString()).toBe("Mon, 01 Jan 2018 00:00:00 GMT")
  expect(zeroToday.getUTCDate()).toBe(1);
  expect(zeroToday.getUTCMonth()).toBe(0);
  expect(zeroToday.getUTCFullYear()).toBe(2018);
  expect(zeroToday.getUTCMinutes()).toBe(0);
  expect(zeroToday.getUTCHours()).toBe(0);
  expect(zeroToday.getUTCSeconds()).toBe(0);
  expect(zeroToday.getUTCMilliseconds()).toBe(0);
});

test('zero date 10 June 2021', () => {
  const zeroToday = sut.zeroDate(10, "Jun", 2021);
  expect(zeroToday.toUTCString()).toBe("Thu, 10 Jun 2021 00:00:00 GMT")
  expect(zeroToday.getUTCDate()).toBe(10);
  expect(zeroToday.getUTCMonth()).toBe(5);
  expect(zeroToday.getUTCFullYear()).toBe(2021);
  expect(zeroToday.getUTCMinutes()).toBe(0);
  expect(zeroToday.getUTCHours()).toBe(0);
  expect(zeroToday.getUTCSeconds()).toBe(0);
  expect(zeroToday.getUTCMilliseconds()).toBe(0);
});

test('zero date 29 Feb 2024', () => {
  const zeroToday = sut.zeroDate(29, "Feb", 2024);
  expect(zeroToday.toUTCString()).toBe("Thu, 29 Feb 2024 00:00:00 GMT")
  expect(zeroToday.getUTCDate()).toBe(29);
  expect(zeroToday.getUTCMonth()).toBe(1);
  expect(zeroToday.getUTCFullYear()).toBe(2024);
  expect(zeroToday.getUTCMinutes()).toBe(0);
  expect(zeroToday.getUTCHours()).toBe(0);
  expect(zeroToday.getUTCSeconds()).toBe(0);
  expect(zeroToday.getUTCMilliseconds()).toBe(0);
});