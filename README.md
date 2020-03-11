# COVID-19 data extractor

Simpe Node program to extract daily reports on the COVID-19 from the Johns Hopkins University Center for Systems Science and Engineering's [data repository](https://github.com/CSSEGISandData/COVID-19).

Each day, it fetches the daily CSV file - featuring the confirmed cases, deaths and recovered for each country - and sends the data to an [API server](https://github.com/GregVes/covid-19-api-server) a user can request through different endpoints.

# How to run the program

```
npm install
npm run start:dev
```

# How to schedule the program to run (Arch Linux)

Create a *run.sh* in the root of the project and add

```
#!/usr/bin/bash

cd /path/to/project/root
./node_modules/.bin/babel src --out-dir dist && node ./dist/index.js
```

In */etc/systemd/system*, create *covid.timer* file and add

```
[Unit]
Description=run covid service once a day at 8AM
[Timer]
OnCalendar=*-*-* 08:00:00
Persistent=true
[Install]
WantedBy=timers.target
```

Still in */etc/systemd/system*, create the corresponding *covid.service* file and add

```
[Unit]
Description=Run script to launch a node server fetching covid daily report on Github
[Service]
ExecStart=path/to/bash/script/bash_script_name.sh
[Install]
WantedBy=default.target
```

Then, under roo root, run 

```
systemctl enable covid.timer
systemctl enable covid.service
systemctl start covid.timer
```

Verify that job is registered with: 

```
systemctl list-timers --all
```

