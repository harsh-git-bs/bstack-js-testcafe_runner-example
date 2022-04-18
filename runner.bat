@ECHO OFF
set BROWSERSTACK_USE_AUTOMATE=1
set BROWSERSTACK_DEBUG=true
set BROWSERSTACK_VIDEO="true"

set BROWSERSTACK_BUILD_ID="Nintendo"
set BROWSERSTACK_PROJECT_NAME="Nintendo"
set BROWSERSTACK_TEST_RUN_NAME="Nintendo"

if %1%==single ( 
    set BROWSERSTACK_TEST_RUN_NAME= Browserstack Single Search & echo "Running Single testcafe test on Browserstack" & node .\testcafe_runner_single.js 
    ) ELSE IF %1%==parallel ( 
        set BROWSERSTACK_TEST_RUN_NAME= Browserstack Parallel Search & echo "Running Parallel testcafe tests on Browserstack" & node .\testcafe_runner_parallel.js )