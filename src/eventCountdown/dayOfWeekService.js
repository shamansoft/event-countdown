import * as timeHelper from './time.js'

//month Mmm (Jan)
//dayOfWeek Dd (Fr)
function lastDayOfWeek(year, month, dayOfWeek) {
    month = timeHelper.getMonth(month);
    dayOfWeek = timeHelper.getDay(dayOfWeek);
    const lastDateOfMonth = timeHelper.zeroDate(0, month + 1, year); 
    let date = lastDateOfMonth.getUTCDate() - lastDateOfMonth.getUTCDay() + dayOfWeek;
    if(date > lastDateOfMonth.getUTCDate()){
        date = date - 7;
    }
    return timeHelper.zeroDate(date, month, year);
}

function timeDifference(startDate, endDate){
    const msDiff = endDate.getTime() - startDate.getTime();
    const abs = Math.abs(msDiff);
    return {
        ms : abs,
        seconds: Math.floor(abs/1000),
        minutes: Math.floor(abs/(1000*60)),
        hours: Math.floor(abs/(1000*60*60)),
        days: Math.floor(abs/(1000*60*60*24)),
        months: Math.floor(abs/(1000*60*60*24*30)), //1 month == 30 days
        years: Math.floor(abs/(1000*60*60*24*365)),
        inverted : msDiff < 0
    }
}

export {
    lastDayOfWeek,
    timeDifference
}