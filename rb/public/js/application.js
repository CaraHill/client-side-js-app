$(document).ready(function() {

  var getAllCustomers = function() {
    $.ajax({
      url: "/customers",
      type: 'GET',
      success: function(data) {
        view.allCustomers(data);
      },
      failure: function() {
        view.allCustomersFailure();
      }
    });
  };

  var deleteCustomer = function(customer, customerId) {
    $.ajax({
      url: "/customers/"+customerId,
      type: 'DELETE',
      success: function() {
        view.deleteCustomer(customer);
      },
      failure: function() {
        view.deleteCustomerFailure();
      }
    });
  };

  var seeCustomerNotes = function(customerId, customerNotes) {
    $.ajax({
      url: "/customers/"+customerId+"/notes",
      type: 'GET',
      success: function(data) {
        view.customerNotes(data,customerNotes);
      },
      failure: function() {
        view.customerNotesFailure();
      }
    });
  };

  var addNewCustomerNote = function (e, customerId, customerNote) {
    $.ajax({
      url: "/customers/"+customerId+"/notes",
      type: 'POST',
      data: $(e.target).serialize(),
      success: function(data) {
        view.addCustomerNote(data,customerNote);
      },
      failure: function() {
        view.addCustomerNoteFailure();
      }
    });
  };

  var view = new CrmView('#crm');
  getAllCustomers();
  $('#crm').on('click', '.delete-button', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    deleteCustomer(customer, customerId);
  });

  $('#crm').on('click', '.more-button', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    var customerNotes = customer.find('.notes-go-here');
    seeCustomerNotes(customerId, customerNotes);
  });

  $('#crm').on('click', '.add-notes', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    var customerForm = customer.find('.new-note').show();
  });

  $('#crm').on('submit', '.new-note', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    var customerNote = customer.find('.notes-go-here');
    addNewCustomerNote(e, customerId, customerNote);
  });

});
