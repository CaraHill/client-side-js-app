$(document).ready(function() {

  var view = new CrmView('#crm');
  var model = new CrmModel();
  model.getAllCustomers(view.allCustomers,view.allCustomersFailure);
  $('#crm').on('click', '.delete-button', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    model.deleteCustomer(view.deleteCustomer, view.deleteCustomerFailure, customer, customerId);
  });

  $('#crm').on('click', '.more-button', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    var customerNotes = customer.find('.notes-go-here');
    model.seeCustomerNotes(view.customerNotes, view.customerNotesFailure, customerId, customerNotes);
  });

  $('#crm').on('click', '.add-notes', function(e) {
    e.preventDefault();
    var customer = $(e.target).parent();
    var customerId = customer.data('customer-id');
    var customerForm = customer.find('.new-note').show();
  });

  $('#crm').on('submit', '.new-note', function(e) {
    e.preventDefault();
    var noteForm = $(e.target)
    var customer = noteForm.parent();
    var customerId = customer.data('customer-id');
    var customerNote = customer.find('.notes-go-here');
    model.addNewCustomerNote(view.addCustomerNote, view.addCustomerNoteFailure, noteForm, customerId, customerNote);
  });

});
