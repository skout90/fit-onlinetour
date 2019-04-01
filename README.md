# Quasar App

## setup
Uninstall quasar-cli if you have it from <1.0 versions
  
> npm uninstall -g quasar-cli
  
Node.js >= 8.9.0 is required.
  
> npm install -g @quasar/cli

## build cordova

https://v1.quasar-framework.org/quasar-cli/developing-mobile-apps/preparation

## library
- vuex
- moment
- lodash
- partial-js
- axios

## Lint rule

standard
https://github.com/standard/standard

## Sample api url
https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

## trouble shoot

- in build, cordova-plugin-fcm Error: Invalid data, chunk must be a string or buffer, not object 

https://github.com/fechanique/cordova-plugin-fcm/issues/501#issuecomment-399673827

- Current working directory is not a Cordova-based project.

> mkdir src-cordova/www
