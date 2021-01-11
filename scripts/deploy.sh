#!/bin/bash
# Deploys to S3 

DIRECTORY=`dirname $0`
source "$DIRECTORY/secrets.config"

# 1. build
eval "yarn build"

# 2. copy to S3
command="aws s3 sync ./build s3://$path --profile $profile --region eu-central-1 --dryrun"

echo "running $command"
eval $command