import createTestCafe from "testcafe";

var sources = ["index.js"];
var browsers = [
  // "browserstack:chrome@93.0:Windows 10"
  // "browserstack:chrome@101.0 beta:Windows 11",
  "browserstack:edge@101.0 beta:Windows 11",
];

async function testrunner() {
  let testcafe = await createTestCafe("localhost", 1337, 1338);
  await testcafe.createRunner().src(sources).browsers(browsers).run();
  await testcafe.close();
}

testrunner();
