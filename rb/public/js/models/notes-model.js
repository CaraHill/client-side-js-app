function NotesModel () {}

NotesModel.prototype = {
  seeCustomerNotes: function(success, failure, customerId, customerNotes) {
    $.ajax({
      url: "/customers/"+customerId+"/notes",
      type: 'GET',
      success: function(data) {
        success(data,customerNotes);
      },
      failure: function() {
        failure();
      }
    });
  },
  addNewCustomerNote: function (success, failure, noteForm, customerId, customerNote) {
    $.ajax({
      url: "/customers/"+customerId+"/notes",
      type: 'POST',
      data: noteForm.serialize(),
      success: function(data) {
        success(data,customerNote);
      },
      failure: function() {
        failure();
      }
    });
  }
}