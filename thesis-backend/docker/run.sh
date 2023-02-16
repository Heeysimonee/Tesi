#!/bin/bash

cd ~/workdir

if [[ $1 = "production" ]]; then
    npm_cmd="start"
elif [[ $1 = "development" ]]; then
    npm_cmd="start-nodemon"
else
    echo "ERROR: invalid option $1"
    exit 1
fi

# Wait for the database service to be up and running
wait-for-it.sh $DB_SERVICE -t 0

echo "Running npm run $npm_cmd"
npm run $npm_cmd
