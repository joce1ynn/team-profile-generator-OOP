const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Jack", "123", "jack@gmail.com", "Zoom University");
  expect(intern.name).toBe("Jack");
  expect(intern.id).toBe("123");
  expect(intern.email).toBe("jack@gmail.com");
  expect(intern.school).toBe("Zoom University");
});

test("gets intern's name", () => {
  const result = new Intern(
    "Jack",
    "123",
    "jack@gmail.com",
    "Zoom University"
  ).getName();
  expect(result).toEqual("Jack");
});

test("gets intern's ID", () => {
  const result = new Intern(
    "Jack",
    "123",
    "jack@gmail.com",
    "Zoom University"
  ).getId();
  expect(result).toEqual("123");
});

test("gets intern's email", () => {
  const result = new Intern(
    "Jack",
    "123",
    "jack@gmail.com",
    "Zoom University"
  ).getEmail();
  expect(result).toEqual("jack@gmail.com");
});

test("gets intern's school", () => {
  const result = new Intern(
    "Jack",
    "123",
    "jack@gmail.com",
    "Zoom University"
  ).getSchool();
  expect(result).toEqual("Zoom University");
});

test("gets intern's role", () => {
  const result = new Intern(
    "Jack",
    "123",
    "jack@gmail.com",
    "Zoom University"
  ).getRole();
  expect(result).toEqual("Intern");
});
