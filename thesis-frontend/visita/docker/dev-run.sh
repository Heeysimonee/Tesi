#!/bin/sh

cd /home/node/workdir/src

echo "Running npm install"

npm install

./build.sh /home/node/workdir/src /home/node/workdir/dest development --watch
