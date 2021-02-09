const sales = require('./sales');
const { Invoice } = require('./accounting');

const client = new sales.Client('Big Business, Inc.', '1 Corporate Drive.');
const invoice = new Invoice('111-R1-20', client);

console.log(invoice.getClientName());
