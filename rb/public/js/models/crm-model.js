function CrmModel () {

}

CrmModel.prototype = {
  getAllCustomers: function(success,failure) {
    $.ajax({
      url: "/customers",
      type: 'GET',
      success: function(data) {
        success(data);
      },
      failure: function() {
        failure();
      }
    });
  },
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
  },
  seeCustomerNotes: function(success, failure, customerId, customerNotes) {
    $.ajax({
      url: "/customers/"+customerId+"/notes",
      type: 'GET',
      success: function(data) {
        success(data,customerNotes);
      },
      failure: function() {
        failure();
      }
    });
  },
  addNewCustomerNote: function (success, failure, noteForm, customerId, customerNote) {
    $.ajax({
      url: "/customers/"+customerId+"/notes",
      type: 'POST',
      data: noteForm.serialize(),
      success: function(data) {
        success(data,customerNote);
      },
      failure: function() {
        failure();
      }
    });
  }
}