let cache = {} // key: country name, value: country report
let currentCases;
let currentDead;
let currentRecovered;
let country;

exports.hasKey = (country) => {
    if (country in cache) {
        return true;
    }
    return false;
}
exports.getKeys = () => {
    return Object.keys(cache);
}
exports.getValue = (key) => {
    return cache[key];
}
exports.addValue = (reportDto) => {
    cache[reportDto.country] = reportDto;
}
exports.updateValue = (reportDto) => {
    country = reportDto.country
    cache[country].cases += reportDto.cases;
    cache[country].dead += reportDto.dead;
}