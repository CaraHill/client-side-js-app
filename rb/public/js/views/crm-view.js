function CrmView (rootSelector) {
  this.crm = $(rootSelector);
}

CrmView.prototype = {
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