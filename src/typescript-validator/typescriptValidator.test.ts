import { isValidPassword } from "../password-validator";

it("tests password", () => {
    expect(isValidPassword("password")).toBe(true);
});

it("tests empty", () => {
    expect(isValidPassword("")).toBe(false);
});
