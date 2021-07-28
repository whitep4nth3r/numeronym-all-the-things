import { makeNumeronym } from "./index.js";

test("internationalisation returns i18n", () => {
  const result = makeNumeronym("internationalisation");
  expect(result).toEqual("i18n");
});

test("whitep4nth3r yolo returns w10r y2o", () => {
  const result = makeNumeronym("whitep4nth3r yolo");
  expect(result).toEqual("w10r y2o");
});

test("whitep4nth3r yolo internationalisation outrageous returns w10r y2o i18n o8s", () => {
  const result = makeNumeronym("whitep4nth3r yolo internationalisation outrageous");
  expect(result).toEqual("w10r y2o i18n o8s");
});
