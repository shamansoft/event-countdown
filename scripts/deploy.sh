#!/bin/bash
# Deploys to S3 

DIRECTORY=`dirname $0`
source "$DIRECTORY/secrets.config"
command="aws s3 sync ./build s3://$path --profile $profile --region eu-central-1"

echo "running $command"
eval $command