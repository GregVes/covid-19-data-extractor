require("dotenv").config()
const Helpers = require("./helpers");
const { StringStream } = require("scramjet");
const axios = require("axios");
const request = require("request");
const REPORTS_BASE_URL = process.env.REPORTS_BASE_URL;
const API_URL = process.env.API_URL;

// Send ReportDto object to API server
postReport = (reportDto) => {
    axios
        .post(API_URL, reportDto)
        .catch(err => { 
            console.log(err)
        });
}
// Retrieves a csv, convert each row into an object that is mapped to a ReportDto 
extractReport = (url, date) => {
    return StringStream.from(request.get(url))
        .CSVParse()
        .filter(row => {
            return row[2] !== "Last Update" // skip each table's first row
        })
        .map(row => {
            row[2] = date;
            const reportDto = Helpers.reportDto(row);
            return reportDto;
        })
        .consume(reportDto => {
            postReport(reportDto);
        });
}

// get current date and format it 
let date = new Date();
date.setDate(date.getDate()-1) // report of the previous day
date = date.toISOString().split("T")[0];

extractReport(`${REPORTS_BASE_URL}/${Helpers.formattedDate(date)}.csv`, date);
