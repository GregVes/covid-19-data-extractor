let cache = {} // key: country name, value: country report
let currentCases;
let currentDead;
let currentRecovered;
let country;

class ReportsCache {
    constructor() {
        this.cache = {}
    }
    getCache(){
        return this.cache;
    }
    hasKey(ountry) {
        return country in cache;
    }
    getKeys() {
        return Object.keys(this.cache);
    }
    getValue(key) {
        return this.cache[key];
    }
    addValue(report) {
        this.cache[report.country] = report;
    }
    updateValue(reportDto) {
        country = reportDto.country
        cache[country].cases = cache[country].cases + reportDto.cases;
        cache[country].dead = cache[country].dead + reportDto.dead;
    }
}

module.exports = ReportsCache;