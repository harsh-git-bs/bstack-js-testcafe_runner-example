#!/usr/local/bin/bash

# https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/testcafe#installation

#export BROWSERSTACK_USE_AUTOMATE="1"
export BROWSERSTACK_CONSOLE="verbose"
export BROWSERSTACK_NETWORK_LOGS="true"
export BROWSERSTACK_VIDEO="true"
# export BROWSERSTACK_GEO_LOCATION="FR"
# export BROWSERSTACK_TIMEZONE="Europe/Paris"
# BROWSERSTACK_DISPLAY_RESOLUTION
# export BROWSERSTACK_LOGFILE="screenshots/browserstack.log"

export BROWSERSTACK_BUILD_ID="Nintendo"
export BROWSERSTACK_PROJECT_NAME="Nintendo"
export BROWSERSTACK_TEST_RUN_NAME="Nintendo"

# export PERCY_DEBUG= "*"

# python -m SimpleHTTPServer 5338
# python3 -m http.server 5338 &
# npx ts-node browserstack-test.ts
# npx percy exec -- ts-node test-browserstack-test.ts --ts-config-path tsconfig.json

# npx ts-node test-browserstack-test.ts --ts-config-path tsconfig.json

# Single run
testcafe_runner_single.js

# Parallel run 
node testcafe_runner_parallel.js
