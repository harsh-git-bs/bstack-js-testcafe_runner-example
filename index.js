import { Selector } from "testcafe";

const querybox = Selector(() => {
  return document.getElementsByName("q");
});

const search = Selector(() => {
  return document.getElementsByName("btnK");
});

fixture`Search Browserstack`.page`https://www.google.com`;

test("Search Browserstack", async (t) => {
  await t
    .maximizeWindow()
    .typeText(querybox, "Browserstack")
    .click(search)
    .wait(3000)
    .click(".LC20lb.MBeuO.DKV0Md")
    .wait(3000);
  console.log("index.js");
});
