function CrmController () {}

CrmController.prototype = {
  run: function() {
    this.customersView = new CustomersView('#crm');
    this.customersModel = new CustomersModel();
    this.customerModel = new CustomerModel();
    this.customerView = new CustomerView('#crm');
    this.notesModel = new NotesModel();
    this.notesView = new NotesView('#crm');

    this.customersModel.getAllCustomers(this.customersView.allCustomers,this.customersView.allCustomersFailure);

    this.registerEventHandlers();
  },
  registerEventHandlers: function() {
    this.customerView.registerDeleteEventHandler(this.customerModel.deleteCustomer);

    this.notesView.registerNotesEventHandler(this.notesModel.seeCustomerNotes);

    this.notesView.registerAddNotesFormEventHandler();

    this.notesView.registerNewNoteEventHandler(this.notesModel.addNewCustomerNote);
  }
}