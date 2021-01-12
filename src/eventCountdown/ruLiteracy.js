function daysRu(days) {
    const last2 = days%100;
    if((last2 > 4) && (last2 < 21)) return "дней"; 
    const last1 = last2%10;
    if(last1 === 1) return "день";
    if(last1 > 1 && last1 < 5) return "дня";
    return "дней";
}

export {
    daysRu
}