exports.formattedDate = (date) => {
    date = new Date(date);
    const year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "-" + day + "-" + year;
}
exports.datesRange = (start, stop) => {
    let dates = []
    let dateMove = new Date(start);
    let strDate = start;
    while (strDate < stop){
        strDate = dateMove.toISOString().slice(0,10);
        dates.push(strDate);
        dateMove.setDate(dateMove.getDate()+1);
    };
    return dates;
}
exports.reportDto = (row) => {
    return {
        province: row[0],
        country: row[1],
        reportDate: row[2],
        cases: row[3],
        dead: row[4],
        recovered: row[5]
    }
}