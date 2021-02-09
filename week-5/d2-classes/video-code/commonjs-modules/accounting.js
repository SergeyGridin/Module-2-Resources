class Invoice {
  constructor(invoiceNumber, client) {
    this.invoiceNumber = invoiceNumber;
    this.client = client;
  }

  getClientName() {
    return this.client.name;
  }
}

module.exports = {
  Invoice: Invoice
};
