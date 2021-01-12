const days = {
    "Mo" : 1,
    "Tu" : 2,
    "We" : 3, 
    "Th" : 4,
    "Fr" : 5,
    "Sa" : 6,
    "Su" : 0
};

const months = {
    "Jan" : 0,
    "Feb" : 1,
    "Mar" : 2,
    "Apr" : 3,
    "May" : 4,
    "Jun" : 5,
    "Jul" : 6,
    "Aug" : 7,
    "Sep" : 8,
    "Oct" : 9,
    "Nov" : 10,
    "Dec" : 11
};

//month 0..11 or Mmm
function zeroDate(date, month, year){
    if (typeof date.getMonth === 'function') {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0));
    }
    return new Date(Date.UTC(year, getMonth(month), date, 0, 0, 0, 0));
};

//month 0..11 or Mmm
function zeroDateHours(date, month, year, hours){
    return new Date(Date.UTC(year, getMonth(month), date, hours, 0, 0, 0));
};

function getDay(str){
    return typeof str === 'string' ? days[str] : str;
};

function getMonth(str){
    return typeof str === 'string' ? months[str] : str;
};

export {
    zeroDate,
    zeroDateHours,
    getDay,
    getMonth
}