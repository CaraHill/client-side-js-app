describe("Customer", function() {

  describe("CustomerModel", function() {

    it("should return a customer model object", function() {
      expect(new CustomerModel()).toBeDefined();
    });

    var customerModel;

    beforeEach(function() {
      customerModel = new CustomerModel();
    });

    it("should have a delete customer function", function() {
      expect(customerModel.deleteCustomer).toBeDefined();
    });
  });

  describe("CustomerView", function() {

    it("should return a customer view object", function() {
      expect(new CustomerView()).toBeDefined();
    });
  });

  var customerView;

  beforeEach(function() {
    customerView = new CustomerView('#crm');
  });

  it("should have a delete customer function", function() {
    expect(customerView.deleteCustomer).toBeDefined();
  });

  it("should have customer and customerId in the registerDeleteEventHandler function", function() {
    expect(customerView.registerDeleteEventHandler).toContain(customerView.customer);
    expect(customerView.registerDeleteEventHandler).toContain(customerView.customerId);
  });

})