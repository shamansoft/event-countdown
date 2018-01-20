module.exports = {
    // status,
    // getNext,
    getForYear
    ,getStatus
}

const dofs = require('./dayOfWeekService');
const timeHelper = require('./time');

function getForYear(year){
    let duration = 4;
    //get last full weekend of June
    var endDate = dofs.lastDayOfWeek(year, 'Jun', 'Su');  
    //set to Thursday 
    var startDate = timeHelper.zeroDate(endDate);
    startDate.setDate(startDate.getUTCDate() - (duration - 1));
    //Set SAMT offset
    startDate.setUTCHours(4);
    //Set SAMT offset and 19:00
    endDate.setUTCHours(4+19);
    return {
        "startDate" : startDate,
        "endDate" : endDate,
        "duration" : duration
    };
}

function getStatus(forDate){
    let dYear = forDate.getUTCFullYear();
    let pDates = getForYear(dYear);
    // console.log(zeroForDate);
    // console.log(pDates);
    let status = forDate.getTime() < pDates.startDate.getTime() ? "thisYear" 
        : (forDate.getTime() <= pDates.endDate.getTime() ? "inProgress" : "nextYear");
    switch (status) {
        case "thisYear" : {
            return {
                "startDate" : pDates.startDate,
                "endDate" : pDates.endDate,
                "status" : status,
                "daysLeft" : dofs.timeDifference(forDate, pDates.startDate).days
            }
        }
        case "inProgress" : {
            return {
                "startDate" : pDates.startDate,
                "endDate" : pDates.endDate,
                "status" : status,
                "daysLeft" : 0,
            }            
        }
        case "nextYear" : {
            pDates = getForYear(dYear + 1);
            return {
                "startDate" : pDates.startDate,
                "endDate" : pDates.endDate,
                "status" : status,
                "daysLeft" : dofs.timeDifference(forDate, pDates.startDate).days
            }            
        }
    }
}