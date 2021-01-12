import * as timeHelper from './time.js';
import * as dofs from './dayOfWeekService.js';
import {daysRu} from './ruLiteracy.js'

function getForYear(year){
    let duration = 4;
    //get last full weekend of June
    var endDate = dofs.lastDayOfWeek(year, 'Jun', 'Su');  
    //set to Thursday 
    var startDate = timeHelper.zeroDate(endDate);
    startDate.setDate(startDate.getUTCDate() - (duration - 1));
    //Set SAMT offset and 7:00
    startDate.setUTCHours(7-4);
    //Set SAMT offset and 19:00
    endDate.setUTCHours(19-4);
    return {
        "startDate" : startDate,
        "endDate" : endDate,
        "duration" : duration
    };
}

function getStatus(forDate){
    const dYear = forDate.getUTCFullYear();
    let pDates = getForYear(dYear);
    const status = forDate.getTime() < pDates.startDate.getTime() ? "thisYear" 
        : (forDate.getTime() <= pDates.endDate.getTime() ? "inProgress" : "nextYear");
    switch (status) {
        case "thisYear" : {
            const daysLeft = dofs.timeDifference(forDate, pDates.startDate).days;
            return {
                "startDate" : pDates.startDate,
                "endDate" : pDates.endDate,
                "status" : status,
                "daysLeft" : daysLeft,
                "ruDays": daysRu(daysLeft),
            }
        }
        case "inProgress" : {
            const daysLeft = 0;
            return {
                "startDate" : pDates.startDate,
                "endDate" : pDates.endDate,
                "status" : status,
                "daysLeft" : daysLeft,
                "ruDays": daysRu(daysLeft)
            }            
        }
        case "nextYear" : {
            pDates = getForYear(dYear + 1);
            const daysLeft = dofs.timeDifference(forDate, pDates.startDate).days;
            return {
                "startDate" : pDates.startDate,
                "endDate" : pDates.endDate,
                "status" : status,
                "daysLeft" : daysLeft,
                "ruDays": daysRu(daysLeft),
            }            
        }
        default : {
            return {
                "startDate" : pDates.startDate,
                "endDate" : pDates.endDate,
                "status" : "UNKNOWN",
                "daysLeft" : 0,
                "ruDays": daysRu(0),
            };
        }
    }
}

export {
    getForYear,
    getStatus
}