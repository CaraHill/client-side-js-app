function CrmController () {}

CrmController.prototype = {
  run: function() {
    this.view = new CrmView('#crm');
    this.model = new CrmModel();

    this.model.getAllCustomers(this.view.allCustomers,this.view.allCustomersFailure);

    this.view.registerDeleteEventHandler(this.model.deleteCustomer);

    this.view.registerNotesEventHandler(this.model.seeCustomerNotes);

    this.view.registerAddNotesFormEventHandler();

    this.view.registerNewNoteEventHandler(this.model.addNewCustomerNote);
  }
}