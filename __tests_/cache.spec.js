const ReportsCache = require("../cache")
describe("Cache operations", () => {
    let mockedCache
    let cacheTest
    beforeEach(() => {
        mockedCache = {
            "Brazil": {
                country: "Brazil",
                reportDate: "2020-03-20",
                cases: 100,
                dead: 100
            },
            "Germany": {
                country: "Germany",
                reportDate: "2020-03-20",
                cases: 200,
                dead: 200
            }
        }
        cacheTest = new ReportsCache(mockedCache);
    })
    test("it should returns the cache object", () => {
        const result = cacheTest.getCache();
        expect(result).toEqual(mockedCache);
    })
    test("it returns true if country parameter is a cache key", () => {
        const result = cacheTest.hasKey("Brazil");
        expect(result).toBe(true);
    })
    test("it returns the cache keys", () => {
        const expected = [mockedCache[["Brazil"]].country, mockedCache["Germany"].country]
        const result = cacheTest.getKeys();
        expect(result).toEqual(expected);
    })
    test("it returns a cache value/report", () => {
        const result = cacheTest.getValue("Brazil");
        expect(result).toEqual(mockedCache["Brazil"]);
    })
    test("it adds a value in a cache key", () => {
        const expected = {
            country: "Foo",
            dead: 50,
            casees: 50
        }
        cacheTest.addValue(expected);
        const result = cacheTest.getValue("Foo")
        expect(result).toEqual(expected);
    })
});