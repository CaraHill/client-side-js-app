function CustomersView (rootSelector) {
  this.crm = $(rootSelector);
}

CustomersView.prototype = {
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
  }
}