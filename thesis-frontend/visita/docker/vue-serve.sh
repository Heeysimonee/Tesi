#!/bin/bash

cd /home/node/workdir/src

if [[ $1 == "true" ]]
then
    echo "Running npm install $1"
    npm install
fi

echo "Running ./node_modules/.bin/vue-cli-service serve"

npm run serve