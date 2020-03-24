class ReportsCache {
    constructor(cache) {
        this.cache = cache // key: country name, value: country report
    }
    getCache(){
        return this.cache;
    }
    hasKey(country) {
        return country in this.cache;
    }
    getKeys() {
        return Object.keys(this.cache);
    }
    getValue(key) {
        if (this.hasKey(key)) {
            return this.cache[key];
        }
        console.log("No value at this key")
        return {}
    }
    addValue(report) {
        this.cache[report.country] = report;
    }
    updateValue(reportDto) {
        const country = reportDto.country
        this.cache[country].cases += reportDto.cases;
        this.cache[country].dead += reportDto.dead;
    }
}
module.exports = ReportsCache;