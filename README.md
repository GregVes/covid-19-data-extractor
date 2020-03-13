# COVID-19 data extractor

Simpe Node program to extract daily reports on the COVID-19 from the Johns Hopkins University Center for Systems Science and Engineering's [data repository](https://github.com/CSSEGISandData/COVID-19).

It fetches the daily* CSV file - featuring the confirmed cases, deaths and recovered for each country - and sends the data to an [API server](https://github.com/GregVes/covid-19-api-server).

*a scheduled job launches the program once a day on my local machine

See [API Server]((https://github.com/GregVes/covid-19-api-server) if you want to retrieve JSON data by country from January 22, 2020.
