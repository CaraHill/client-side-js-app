$(document).ready(function() {

  var view = new CrmView('#crm');

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

  $('#crm').on('click', '.delete-button', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
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
  });

  $('#crm').on('click', '.more-button', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    var customerNotes = customer.find('.notes-go-here');
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
  });

});
