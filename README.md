# covid-19-data-extractor

Simpe Node program to extract daily reports on the COVID-19 from the Johns Hopkins University Center for Systems Science and Engineering's _data repository_[https://github.com/CSSEGISandData/COVID-19].

Each day, it fetches the daily CSV file - featuring the confirmed cases, deaths and recovered for each country - and sends the data to an _API server_[https://github.com/GregVes/covid-19-api-server] a user can request through different endpoints.
