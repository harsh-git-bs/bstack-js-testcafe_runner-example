import createTestCafe from "testcafe";

var sources = ["index.js"];
var browsers = ["browserstack:chrome@93.0:Windows 10"];

async function testrunner() {
  let testcafe = await createTestCafe("localhost", 1337, 1338);
  await testcafe.createRunner().src(sources).browsers(browsers).run();
  await testcafe.close();
}

testrunner();