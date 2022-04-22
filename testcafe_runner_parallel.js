import createTestCafe from "testcafe";

var concurrency = [4];
var sources = ["index.js"];
var browsers = [
  // "browserstack:iPhone 12 Mini",
  // "browserstack:Samsung Galaxy S20",
  // "browserstack:safari:OS X Big Sur",
  // "browserstack:chrome-1:Windows 10",
  "browserstack:chrome@101.0 beta:Windows 11",
  "browserstack:firefox@100.0 beta:Windows 11",
  "browserstack:edge@101.0 beta:Windows 11",
  "browserstack:opera@12.16:Windows 8.1",
  "browserstack:ie@11.0:Windows 10",
];

async function testrunner() {
  let testcafe = await createTestCafe("bs-local.com", 1337, 1338);
  await testcafe
    .createRunner()
    .src(sources)
    .browsers(browsers)
    .concurrency(4)
    .run({ browserInitTimeout: 600000 });
  await testcafe.close();
}

testrunner();
