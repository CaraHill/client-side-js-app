function CrmController () {}

CrmController.prototype = {
  run: function() {
    this.view = new CrmView('#crm');
    this.customersModel = new CustomersModel();
    this.customerModel = new CustomerModel();
    this.notesModel = new NotesModel();

    this.customersModel.getAllCustomers(this.view.allCustomers,this.view.allCustomersFailure);

    this.registerEventHandlers();
  },
  registerEventHandlers: function() {
    this.view.registerDeleteEventHandler(this.customerModel.deleteCustomer);

    this.view.registerNotesEventHandler(this.notesModel.seeCustomerNotes);

    this.view.registerAddNotesFormEventHandler();

    this.view.registerNewNoteEventHandler(this.notesModel.addNewCustomerNote);
  }
}