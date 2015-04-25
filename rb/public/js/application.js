$(document).ready(function() {

   var customers = []
   // var $customers = $()

    $.ajax({
      url: "/customers",
      type: 'GET',
      success: function(data) {
        for(var i = 0; i < data.length; i++) {
          var customer = data[i]
          var $customerName = $('<li>'+customer.name+'</li>');
          $('#crm').append($customerName);
          // debugger
        }
       // console.log(customers);
      // $()
      }
    })


});
