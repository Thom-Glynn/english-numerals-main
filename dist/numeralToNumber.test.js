"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeralToNumber_1 = require("./numeralToNumber");
test("Should return a number", () => {
    const result = numeralToNumber_1.numeralToNumber("seven");
    expect(typeof result).toBe("number");
});