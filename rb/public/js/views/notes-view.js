function NotesView (rootSelector) {
  this.crm = $(rootSelector);
}

NotesView.prototype = {
  registerNotesEventHandler: function(seeCustomerNotes) {
    this.crm.on('click', '.more-button', function(e) {
      e.preventDefault();
      var customer = $(e.target).parent();
      var customerId = customer.data('customer-id');
      var customerNotes = customer.find('.notes-go-here');
      seeCustomerNotes(this.customerNotes, this.customerNotesFailure, customerId, customerNotes);
    }.bind(this));
  },
  registerAddNotesFormEventHandler: function() {
    this.crm.on('click', '.add-notes', function(e) {
      e.preventDefault();
      var customer = $(e.target).parent();
      var customerId = customer.data('customer-id');
      var customerForm = customer.find('.new-note').show();
    });
  },
  registerNewNoteEventHandler: function(addNewNote) {
    this.crm.on('submit', '.new-note', function(e) {
        e.preventDefault();
        var noteForm = $(e.target)
        var customer = noteForm.parent();
        var customerId = customer.data('customer-id');
        var customerNote = customer.find('.notes-go-here');
        addNewNote(this.addCustomerNote, this.addCustomerNoteFailure, noteForm, customerId, customerNote);
      }.bind(this));
  },
  customerNotes: function(data,customerNotes) {
    customerNotes.html(data);
  },
  customerNotesFailure: function() {
    alert("That customer's notes were not displayed!")
  },
  addCustomerNote:function(data, customerNote) {
    customerNote.html(data);
    alert("Success! Your note was added.");
  },
  addCustomerNoteFailure: function() {
    alert("The note was not added.")
  }
}