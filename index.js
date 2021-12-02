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
    .typeText(querybox, "Browserstack")
    .pressKey("enter")
    // .click(search)
    .wait(3000)
    .click(".MBeuO")
    .wait(3000);
});
