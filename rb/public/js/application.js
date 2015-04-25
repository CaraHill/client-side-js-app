$(document).ready(function() {

  var view = new CrmView('#crm');
  var model = new CrmModel();

  model.getAllCustomers(view.allCustomers,view.allCustomersFailure);

  view.registerDeleteEventHandler(model.deleteCustomer);

  view.registerNotesEventHandler(model.seeCustomerNotes);

  view.registerAddNotesFormEventHandler();

  view.registerNewNoteEventHandler(model.addNewCustomerNote);

});
