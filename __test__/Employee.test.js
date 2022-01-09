const Employee = require("../lib/Employee");

test("creates an emplyee object", () => {
  const emplyee = new Employee("Jack", "123", "jack@gmail.com");
  expect(emplyee.name).toBe("Jack");
  expect(emplyee.id).toBe("123");
  expect(emplyee.email).toBe("jack@gmail.com");
});

test("gets emplyee's name", () => {
  const result = new Employee("Jack", "123", "jack@gmail.com").getName();
  expect(result).toEqual("Jack");
});

test("gets emplyee's ID", () => {
  const result = new Employee("Jack", "123", "jack@gmail.com").getId();
  expect(result).toEqual("123");
});

test("gets emplyee's email", () => {
  const result = new Employee("Jack", "123", "jack@gmail.com").getEmail();
  expect(result).toEqual("jack@gmail.com");
});

test("gets emplyee's role", () => {
  const result = new Employee("Jack", "123", "jack@gmail.com").getRole();
  expect(result).toEqual("Employee");
});
