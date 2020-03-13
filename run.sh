#!/usr/bin/bash

cd /home/greg/projects/covid_reports/covid-19-data-extractor
./node_modules/.bin/babel src --out-dir dist && node ./dist/index.js