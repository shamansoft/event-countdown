import * as timeHelper from './time.js';
import * as dofs from './dayOfWeekService.js';
import {daysRu} from './ruLiteracy.js'

const SMT_OFFSET = -4;
const P_DURATION = 4;

function getForYear(year){
    //get last full weekend of June
    const endDate = dofs.lastDayOfWeek(year, 'Jun', 'Su');  
    //set to Thursday 
    const startDate = timeHelper.zeroDate(endDate);
    startDate.setDate(startDate.getUTCDate() - (P_DURATION - 1));
    //Set SAMT offset and 7:00
    startDate.setUTCHours(7+SMT_OFFSET);
    //Set SAMT offset and 19:00
    endDate.setUTCHours(19+SMT_OFFSET);
    return {
        "startDate" : startDate,
        "endDate" : endDate,
        "duration" : P_DURATION
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