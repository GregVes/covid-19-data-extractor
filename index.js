require("dotenv").config()

import { formatDate, getDatesRanges } from "./helpers"

const { StringStream } = require("scramjet");
const request = require("request");
const BASE_URL = process.env.BASE_URL;

function findSingleReport(url) {
    request.get(url)
        .pipe(new StringStream())
        .CSVParse()
        .consume(object => console.log(object))
        .then(() => console.log("DONE"));
}

let dates = getDatesRanges("2020-01-22", "2020-03-10");
dates = dates.map(date => formatDate(date));

findSingleReport(`${BASE_URL}/${dates[dates.length-1]}.csv`);