#!/bin/bash

help() {
	echo "Usage:"
	echo "        build.sh SRC_PATH DEST_PATH MODE [options]"
	echo ""
	echo "MODE       =  (development | production)"
	exit
}

if [[ "$@" = *"-h"* ]] || [[ "$@" = *"-help"* ]]; then
	help
fi

if [[ "$#" -lt 3 ]]; then
	echo "ERROR: too few arguments"
	help
fi

#echo "Running cd $1 && ../node_modules/.bin/vue-cli-service build --mode $3 --dest $2 --no-clean -- ${@:4}"

#cd "$1"
#../node_modules/.bin/vue-cli-service build --mode "$3" --dest "$2" --no-clean "${@:4}"