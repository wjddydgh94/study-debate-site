#!/bin/sh
BUILD_STAGE=$1

if [ -z $1 ]
then
  BUILD_STAGE='dev'
fi

echo 'BUILD_STAGE : '$BUILD_STAGE
if [ "$BUILD_STAGE" == "dev" ] || [ "$BUILD_STAGE" == "stg" ] || [ "$BUILD_STAGE" == "prod" ]; then
  docker build -t create-web-$BUILD_STAGE --build-arg BUILD_STAGE=$BUILD_STAGE .
else
  echo 'not support BUILD_STAGE. \n ex) dev, stg, prod'
fi