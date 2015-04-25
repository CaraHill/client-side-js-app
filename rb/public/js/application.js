$(document).ready(function() {

    $.ajax({
      url: "/customers",
      type: 'GET',
      success: function(data) {
        for(var i = 0; i < data.length; i++) {
          var customer = data[i]
          var customerId = customer.id
          var customerDiv = '<div class="customer" data-customer-id="'+customerId+'">'+customer.name+
           '<a class="delete-button" href="">Delete</a> '+
          '<a class="more-button" href="">More</a>'+ '</div>';
          $('#crm').append(customerDiv);
        }
      },
      failure: function() {
        alert("Where are the customers?!?");
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
          $(customer).hide();
        },
        failure: function() {
          alert("That customer was not deleted!");
        }
      });
    });



});
