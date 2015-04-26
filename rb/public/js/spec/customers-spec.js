describe("Customers", function() {

  describe("CustomersModel", function() {

    it("should return a customers model object", function() {
      expect(new CustomersModel()).toBeDefined();
    });

    var customersModel;

    beforeEach(function() {
      customersModel = new CustomersModel();
    });

    it("should have a get all customers function", function() {
      expect(customersModel.getAllCustomers).toBeDefined();
    });
  });

  describe("CustomersView", function() {

    it("should return a customers view object", function() {
      expect(new CustomersView()).toBeDefined();
    });
  });

  var customersView;

  beforeEach(function() {
    customersView = new CustomersView('#crm');
  });

  it("should have a all customers function", function() {
    expect(customersView.allCustomers).toBeDefined();
  });

  it("should have customerDiv in the allCustomers function", function() {
    expect(customersView.allCustomers).toContain(customersView.customerDiv);

  });

})