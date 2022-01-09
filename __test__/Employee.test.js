const Employee = require("../lib/Employee");

// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

test("gets emplyee's name", () => {
  const result = new Employee("Jack");
  expect(result.getName()).toBe("Jack");
});
