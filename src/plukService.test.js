const helper = require('./time');
const sut = require('./plukService');

test('pluk 2019', () => {
  const expectedDate = helper.zeroDateHours(27,"Jun",2019,4);
  expect(sut.getForYear(2019).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2018', () => {
  const expectedDate = helper.zeroDateHours(21,"Jun",2018,4);
  expect(sut.getForYear(2018).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2017', () => {
  const expectedDate = helper.zeroDateHours(22,"Jun",2017,4);
  expect(sut.getForYear(2017).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2014', () => {
  const expectedDate = helper.zeroDateHours(26,"Jun",2014,4);
  expect(sut.getForYear(2014).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2014', () => {
  const expectedDate = helper.zeroDateHours(26,"Jun",2014,4);
  expect(sut.getForYear(2014).startDate.toISOString()).toBe(expectedDate.toISOString());
});
test('pluk 2013', () => {
  const expectedDate = helper.zeroDateHours(27,"Jun",2013,4);
  expect(sut.getForYear(2013).startDate.toISOString()).toBe(expectedDate.toISOString());
});

// status

test('June 11 2018', () => {
    const expected = {
        status: "thisYear",
        startDate: helper.zeroDateHours(21,"Jun",2018,4),
        endDate: helper.zeroDateHours(24,"Jun",2018,23),
        daysLeft: 10
    }
    expect(sut.getStatus(helper.zeroDate(11, "Jun", 2018))).toEqual(expected);
});

test('June 22 2018', () => {
    const expected = {
        status: "inProgress",
        startDate: helper.zeroDateHours(21,"Jun",2018,4),
        endDate: helper.zeroDateHours(24,"Jun",2018,23),
        daysLeft: 0
    }
    expect(sut.getStatus(helper.zeroDate(22, "Jun", 2018))).toEqual(expected);
});

test('July 1 2018', () => {
    const expected = {
        status: "nextYear",
        startDate: helper.zeroDateHours(27,"Jun",2019,4),
        endDate: helper.zeroDateHours(30,"Jun",2019,23),
        daysLeft: 361
    }
    expect(sut.getStatus(helper.zeroDate(1, "Jul", 2018))).toEqual(expected);
});