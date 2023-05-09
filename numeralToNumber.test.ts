import { numeralToNumber } from "./numeralToNumber";

test("Should return a number", () => {
  const result = numeralToNumber("seven");

  expect(typeof result).toBe("number");
});
