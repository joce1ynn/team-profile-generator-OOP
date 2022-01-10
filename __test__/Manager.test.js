const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Jack", "123", "jack@gmail.com", "L1");
  expect(manager.name).toBe("Jack");
  expect(manager.id).toBe("123");
  expect(manager.email).toBe("jack@gmail.com");
  expect(manager.officeNumber).toBe("L1");
});

test("gets manager's name", () => {
  const result = new Manager("Jack", "123", "jack@gmail.com", "L1").getName();
  expect(result).toEqual("Jack");
});

test("gets manager's ID", () => {
  const result = new Manager("Jack", "123", "jack@gmail.com", "L1").getId();
  expect(result).toEqual("123");
});

test("gets manager's email", () => {
  const result = new Manager("Jack", "123", "jack@gmail.com", "L1").getEmail();
  expect(result).toEqual("jack@gmail.com");
});

test("gets Manager's role", () => {
  const result = new Manager("Jack", "123", "jack@gmail.com", "L1").getRole();
  expect(result).toEqual("Manager");
});
