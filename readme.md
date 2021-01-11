# Event Date Countdown 

## Pluk Countdown

This should be a ReactJS webapp deployed somewhere

## Local Development

### Run Dev Server
```
yarn start
```

### Run Tests
```
yarn test
```

## Deploy
The deploy happens by coping prebuilt static version of the website to previously configured to host websites S3 bucket.

### Manual
a file `scripts/secrets.config` should be existing with the following content:
```
profile="name of aws profile from ~/.aws/credentials file"
path="name of S3 bucket where to deploy (copy) the website's files"
```
To build and deploy to prod run 
```
scripts/deploy.sh
```
### CD
[TBD](https://github.com/shamansoft/event-countdown/issues/6) 