function CustomerModel () {}

CustomerModel.prototype = {

  deleteCustomer: function(success, failure, customer, customerId) {
    $.ajax({
      url: "/customers/"+customerId,
      type: 'DELETE',
      success: function() {
        success(customer);
      },
      failure: function() {
        failure();
      }
    });
  }
}

