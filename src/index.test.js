import { makeNumeronym } from "./index.js";

test("internationalisation returns i18n", () => {
  const result = makeNumeronym("internationalisation");

  expect(result).toEqual("i18n");
});
