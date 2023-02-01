const listEmployees = require('./employeeAction.js');

test('listEmployees should be a function', () => {
  console.log('test');
  expect(typeof listEmployees).toBe('function');
});
