# COVID-19 Daily Reports Extractor

Simpe Node program hosted on Heroku that is scheduled to extract reports on the COVID-19 from the Johns Hopkins University Center for Systems Science and Engineering's [data repository](https://github.com/CSSEGISandData/COVID-19) every day at 8AM.

Once the daily CSV file is fetched - featuring the confirmed cases, deaths and recovered for each country - it sends the data to an [API server](https://github.com/GregVes/covid-19-api-server).

See the [API Server](https://github.com/GregVes/covid-19-api-server) if you want to retrieve JSON data by country from January 22, 2020.
