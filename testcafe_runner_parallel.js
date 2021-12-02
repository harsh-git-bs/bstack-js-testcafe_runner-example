import createTestCafe from "testcafe";

var sources = ["index.js"];
var browsers = [
  "browserstack:iPhone 12 Mini",
  "browserstack:Samsung Galaxy S20",
  "browserstack:safari:OS X Big Sur",
  "browserstack:chrome:Windows 10",
];

async function testrunner() {
  let testcafe = await createTestCafe("bs-local.com", 1337, 1338);
  await testcafe
    .createRunner()
    .src(sources)
    .browsers(browsers)
    .run({ browserInitTimeout: 600000 });
  await testcafe.close();
}

testrunner();
