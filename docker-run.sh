#!/bin/sh
IMAGE_STAGE=$1
PORT=$2

if [ -z $1 ]
then
  IMAGE_STAGE='dev'
fi

if [ -z $2 ]
then
  PORT=3010
fi

echo 'IMAGE_STAGE : '$IMAGE_STAGE

if [ "$IMAGE_STAGE" == "dev" ] || [ "$IMAGE_STAGE" == "stg" ] || [ "$IMAGE_STAGE" == "prod" ]; then
  CONTAINER_NAME='create-web-container-'$IMAGE_STAGE'-'$PORT
  IMAGE_NAME='create-web-'$IMAGE_STAGE
  docker rm $CONTAINER_NAME
  docker run --name $CONTAINER_NAME -p $PORT:3010 -d $IMAGE_NAME
else
  echo 'not support IMAGE_STAGE. \n ex) dev, stg, prod'
fi