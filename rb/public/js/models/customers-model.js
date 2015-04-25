function CustomersModel () {

}

CustomersModel.prototype = {
  getAllCustomers: function(success,failure) {
    $.ajax({
      url: "/customers",
      type: 'GET',
      success: function(data) {
        success(data);
      },
      failure: function() {
        failure();
      }
    });
  }
}