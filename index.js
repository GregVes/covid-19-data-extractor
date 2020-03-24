require("dotenv").config()
const Helpers = require("./helpers");
const ReportsCache = require("./cache");
const { StringStream } = require("scramjet");
const axios = require("axios");
const request = require("request");
const REPORTS_BASE_URL = process.env.REPORTS_BASE_URL;
const API_URL = process.env.API_URL;

const cache = new ReportsCache({});

// Send ReportDto object to API server
post = (reportDto) => {
    axios
        .post(API_URL, reportDto)
        .catch(err => { 
            console.log(err)
        });
}
// Retrieves a csv, convert each row into an object that is mapped to a ReportDto 
let counter = -1;
handleExtraction = async (url, date) => {
    return StringStream.from(request.get(url))
        .CSVParse()
        .filter(row => {
            counter++;
            return counter > 0;
        })
        .map(row => {
            // format data to fit backend requirements
            row[4] = date;
            const reportDto = Helpers.toDto(row);
            return reportDto;
        })
        .consume(reportDto => {
            //One country can have multiple reports per day if it has provinces.
            // So we merge all reports in one to end up with one ReportDto object per country
            if (cache.hasKey(reportDto.country)) {
                cache.updateValue(reportDto); // add up cases and dead
            }
            else {
                cache.addValue(reportDto);
            }
        });
}
async function main() {
    const date = Helpers.lateReportDate();
    await handleExtraction(`${REPORTS_BASE_URL}/${Helpers.format(date)}.csv`, date);
    const countries = cache.getKeys();
    let report
    for (const country of countries) {
        report = cache.getValue(country);
        if (report.country == "US") {
            console.log(report)
        }
        //post(report)
    }
}

main();