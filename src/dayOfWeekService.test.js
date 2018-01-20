const sut = require('./dayOfWeekService');
const time = require('./time');

// test feb 18
test('last thu of feb 2018 is 2018-02-22', () => {
  const expectedDate = time.zeroDate(22,"Feb",2018);
  expect(sut.lastDayOfWeek(2018,"Feb","Th").toISOString()).toBe(expectedDate.toISOString());
});

test('last wed of feb 2018 is 2018-02-28', () => {
  const expectedDate = time.zeroDate(28,"Feb",2018);
  expect(sut.lastDayOfWeek(2018,"Feb","We").toISOString()).toBe(expectedDate.toISOString());
});

// test march 18

test('last sat of march 2018 is 2018-03-31', () => {
  const expectedDate = time.zeroDate(31,"Mar",2018);
  expect(sut.lastDayOfWeek(2018,"Mar","Sa").toString()).toBe(expectedDate.toString());
});

test('last sun of march 2018 is 2018-03-25', () => {
  const expectedDate = time.zeroDate(25,"Mar",2018);
  expect(sut.lastDayOfWeek(2018,"Mar","Su").toString()).toBe(expectedDate.toString());
});

// test jan 18

test('last sun of jan 2018 is 2018-01-28', () => {
  const expectedDate = time.zeroDate(28,"Jan",2018);
  expect(sut.lastDayOfWeek(2018,"Jan","Su").toString()).toBe(expectedDate.toString());
});

test('last mon of jan 2018 is 2018-01-29', () => {
  const expectedDate = time.zeroDate(29,"Jan",2018);
  expect(sut.lastDayOfWeek(2018,"Jan","Mo").toString()).toBe(expectedDate.toString());
});

test('last tue of jan 2018 is 2018-01-30', () => {
  const expectedDate = time.zeroDate(30,"Jan",2018);
  expect(sut.lastDayOfWeek(2018,"Jan","Tu").toString()).toBe(expectedDate.toString());
});

test('last wed of jan 2018 is 2018-01-31', () => {
  const expectedDate = time.zeroDate(31,"Jan",2018);
  expect(sut.lastDayOfWeek(2018,"Jan","We").toString()).toBe(expectedDate.toString());
});

test('last thu of jan 2018 is 2018-01-25', () => {
  const expectedDate = time.zeroDate(25,"Jan",2018);
  expect(sut.lastDayOfWeek(2018,"Jan","Th").toString()).toBe(expectedDate.toString());
});

test('last fri of jan 2018 is 2018-01-26', () => {
  const expectedDate = time.zeroDate(26,"Jan",2018);
  expect(sut.lastDayOfWeek(2018,"Jan","Fr").toString()).toBe(expectedDate.toString());
});

test('last sat of jan 2018 is 2018-01-27', () => {
  const expectedDate = time.zeroDate(27,"Jan",2018);
  expect(sut.lastDayOfWeek(2018,"Jan","Sa").toString()).toBe(expectedDate.toString());
});

//test june 18

test('last sun of jun 2018 is 2018-06-24', () => {
  const expectedDate = time.zeroDate(24,"Jun",2018);
  expect(sut.lastDayOfWeek(2018,"Jun","Su").toString()).toBe(expectedDate.toString());
});

test('last wed of jun 2018 is 2018-06-27', () => {
  const expectedDate = time.zeroDate(27,"Jun",2018);
  expect(sut.lastDayOfWeek(2018,"Jun","We").toString()).toBe(expectedDate.toString());
});

test('last sat of jun 2018 is 2018-06-30', () => {
  const expectedDate = time.zeroDate(30,"Jun",2018);
  expect(sut.lastDayOfWeek(2018,"Jun","Sa").toString()).toBe(expectedDate.toString());
});


//test sept 18

test('last sun of sep 2018 is 2018-09-30', () => {
  const expectedDate = time.zeroDate(30,"Sep",2018);
  expect(sut.lastDayOfWeek(2018,"Sep","Su").toString()).toBe(expectedDate.toString());
});

test('last wed of sep 2018 is 2018-09-26', () => {
  const expectedDate = time.zeroDate(26,"Sep",2018);
  expect(sut.lastDayOfWeek(2018,"Sep","We").toString()).toBe(expectedDate.toString());
});

test('last sat of sep 2018 is 2018-09-29', () => {
  const expectedDate = time.zeroDate(29,"Sep",2018);
  expect(sut.lastDayOfWeek(2018,"Sep","Sa").toString()).toBe(expectedDate.toString());
});

describe('dayOfWeekService', () => {
  describe('#lastDayOfWeek', () => {
    // const randomNumber = 0.123;
    // let limit = 23;
    // let mathRandomBackup;

    beforeEach(() => {
    //   mathRandomBackup = Math.random;
    //   jest.resetAllMocks();
    //   jest.spyOn(Math, 'random').mockImplementation();
    //   Math.random.mockReturnValue(randomNumber);
    });

    afterEach(() => {
    //   Math.random = mathRandomBackup;
    });


  });
});

// time difference

test('0 days', () => {
  const startDate = time.zeroDate(1, 'Jan', 2018);
  const endDate = time.zeroDate(1, 'Jan', 2018);
  const expected = {
    ms: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    months: 0,
    years: 0,
    inverted: false
  }
  expect(sut.timeDifference(startDate, endDate)).toEqual(expected);
});

test('1 day', () => {
  const startDate = time.zeroDate(1, 'Jan', 2018);
  const endDate = time.zeroDate(2, 'Jan', 2018);
  const expected = {
    ms: 1*24*60*60*1000,
    seconds: 1*24*60*60,
    minutes: 1*24*60,
    hours: 1*24,
    days: 1,
    months: 0,
    years: 0,
    inverted: false
  }
  expect(sut.timeDifference(startDate, endDate)).toEqual(expected);
});

test('-1 day', () => {
  const startDate = time.zeroDate(2, 'Jan', 2018);
  const endDate = time.zeroDate(1, 'Jan', 2018);
  const expected = {
    ms: 1*24*60*60*1000,
    seconds: 1*24*60*60,
    minutes: 1*24*60,
    hours: 1*24,
    days: 1,
    months: 0,
    years: 0,
    inverted: true
  }
  expect(sut.timeDifference(startDate, endDate)).toEqual(expected);
});

test('1 year', () => {
  const startDate = time.zeroDate(1, 'Jan', 2018);
  const endDate = time.zeroDate(1, 'Jan', 2019);
  const expected = {
    ms: 365*24*60*60*1000,
    seconds: 365*24*60*60,
    minutes: 365*24*60,
    hours: 365*24,
    days: 365,
    months: 12,
    years: 1,
    inverted: false
  }
  expect(sut.timeDifference(startDate, endDate)).toEqual(expected);
});

test('1 month', () => {
  const startDate = time.zeroDate(1, 'Jan', 2018);
  const endDate = time.zeroDate(1, 'Feb', 2018);
  const expected = {
    ms: 31*24*60*60*1000,
    seconds: 31*24*60*60,
    minutes: 31*24*60,
    hours: 31*24,
    days: 31,
    months: 1,
    years: 0,
    inverted: false
  }
  expect(sut.timeDifference(startDate, endDate)).toEqual(expected);
});

test('1 month june', () => {
  const startDate = time.zeroDate(1, 'Jun', 2018);
  const endDate = time.zeroDate(1, 'Jul', 2018);
  const expected = {
    ms: 30*24*60*60*1000,
    seconds: 30*24*60*60,
    minutes: 30*24*60,
    hours: 30*24,
    days: 30,
    months: 1,
    years: 0,
    inverted: false
  }
  expect(sut.timeDifference(startDate, endDate)).toEqual(expected);
});

// describe('dayOfWeekService', () => {
//   describe('#lastDayOfWeek', () => {
//     // const randomNumber = 0.123;
//     // let limit = 23;
//     // let mathRandomBackup;

//     beforeEach(() => {
//     //   mathRandomBackup = Math.random;
//     //   jest.resetAllMocks();
//     //   jest.spyOn(Math, 'random').mockImplementation();
//     //   Math.random.mockReturnValue(randomNumber);
//     });

//     afterEach(() => {
//     //   Math.random = mathRandomBackup;
//     });

//     test('last tue of 2018 is 2018-01-30', () => {
//       const tue_30_jan_18 = time.zeroDate(30,1,2018);
//       expect(sut.lastDayOfWeek(2018,1,2)).toBe(tue_30_jan_18);
//     });

//     // test('accepts a Number as a salt', () => {
//     //   const aSalt = 13;
//     //   const anotherSalt = aSalt + 17;
//     //   expect(sut.upTo(limit, aSalt)).not.toBe(sut.upTo(limit, anotherSalt));
//     // });

//     // test('uses salt to randomize', () => {
//     //   const aSalt = 'some text';
//     //   const anotherSalt = `another${aSalt}`;
//     //   expect(sut.upTo(limit, aSalt)).not.toBe(sut.upTo(limit, anotherSalt));
//     // });

//     // test('returns value in the range when no salt', () => {
//     //   expect(sut.upTo(limit)).toEqual(Math.floor(randomNumber * limit));
//     // });

//     // test('returns 0 when 0', () => {
//     //   limit = 0;
//     //   expect(sut.upTo(limit)).toEqual(0);
//     // });

//     // test('returns limit when random returned maximum', () => {
//     //   const maxRandomNumber = 1;
//     //   Math.random.mockReturnValue(maxRandomNumber);
//     //   expect(sut.upTo(limit)).toEqual(limit);
//     // });
//   });
// });
