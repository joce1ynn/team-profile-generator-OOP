const Engineer = require("../lib/Engineer");

test("get engineer's name", () => {
  const result = new Engineer("Jack");
  expect(result.getName()).toBe("Jack");
});
