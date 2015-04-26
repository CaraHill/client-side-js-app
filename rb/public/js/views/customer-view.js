function CustomerView(rootSelector) {
  this.crm = $(rootSelector);
}

CustomerView.prototype =  {
  registerDeleteEventHandler: function(deleteCustomer) {
    this.crm.on('click', '.delete-button', function(e) {
      e.preventDefault();
      var customer = $(e.target).parent();
      var customerId = customer.data('customer-id');
      deleteCustomer(this.deleteCustomer, this.deleteCustomerFailure, customer, customerId);
    }.bind(this));
  },
  deleteCustomer: function(customer) {
    customer.hide();
  },
  deleteCustomerFailure: function() {
    alert("That customer was not deleted!");
  }
}