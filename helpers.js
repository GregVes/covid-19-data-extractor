/* Turn YYYY-MM-DD -> DD-MM-YYYY that is the date format of the csv file to fetch */
exports.format = (date) => {
    date = new Date(date);
    const year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "-" + day + "-" + year;
}
exports.toDto = (row) => {
    return {
        country: row[1],
        reportDate: row[2],
        cases: row[3],
        dead: row[4],
        recovered: row[5]
    }
}