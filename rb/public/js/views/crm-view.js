function CrmView (rootSelector) {
  this.crm = $(rootSelector);
}

CrmView.prototype = {
  registerDeleteEventHandler: function(deleteCustomer) {
    this.crm.on('click', '.delete-button', function(e) {
      e.preventDefault();
      var customer = $(e.target).parent();
      var customerId = customer.data('customer-id');
      deleteCustomer(this.deleteCustomer, this.deleteCustomerFailure, customer, customerId);
    }.bind(this));
  },
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
  allCustomers: function(data) {
    for(var i = 0; i < data.length; i++) {
      var customer = data[i]
      var customerId = customer.id
      var customerDiv = '<div class="customer" data-customer-id="'+customerId+'">'+customer.name+
       '<a class="delete-button" href="">Delete</a> '+
      '<a class="more-button" href="">More Info</a> '+'<a class="add-notes" href="">Add New Note</a>'+'<form class="new-note" method="post" action="/customers/"'+customerId+'"/notes"><textarea name="note[content]" placeholder="note content"></textarea><input type="submit" value="submit new note"></form>'+'<div class="notes-go-here"></div>'+'</div>';
      $('#crm').append(customerDiv);
    }
  },
  allCustomersFailure: function() {
    alert("Where are the customers?!?");
  },
  deleteCustomer: function(customer) {
    customer.hide();
  },
  deleteCustomerFailure: function() {
    alert("That customer was not deleted!");
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