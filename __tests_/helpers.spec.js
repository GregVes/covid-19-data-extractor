const Helpers = require("../helpers");

describe("Helpers function", () => {
    test("it formats a date to fit COVID-19 CSV file format", () => {
        expect(Helpers.format("2020-03-10")).toEqual("03-10-2020");
    });
    test("it turns a CSV row into a ReportDto", () => {
        const row = ["", "", "", "France", "2020-03-20", "", "", 100, 100]
        const expected = {
            country: row[3],
            reportDate: row[4],
            cases: row[7],
            dead: row[8]
        }
        expect(Helpers.toDto(row)).toEqual(expected);
    });
});
