describe("Notes", function() {

  describe("NotesModel", function() {

    it("should return a notes model object", function() {
      expect(new NotesModel()).toBeDefined();
    });

    var notesModel;

    beforeEach(function() {
      notesModel = new NotesModel();
    });

    it("should have a see customer notes function", function() {
      expect(notesModel.seeCustomerNotes).toBeDefined();
    });

    it("should have a add new customer note function", function() {
      expect(notesModel.addNewCustomerNote).toBeDefined();
    });
  });

  describe("NotesView", function() {

    it("should return a notes view object", function() {
      expect(new NotesView()).toBeDefined();
    });
  });

  var notesView;

  beforeEach(function() {
    notesView = new NotesView('#crm');
  });

  it("should have a customerNotes function", function() {
    expect(notesView.customerNotes).toBeDefined();
  });

  it("should have a addCustomerNote function", function() {
    expect(notesView.addCustomerNote).toBeDefined();
  });

  it("should have customerId in the registerNotesEventHandler function", function() {
    expect(notesView.registerNotesEventHandler).toContain(notesView.customerId);
  });

  it("should have customerNote in the registerNewNoteEventHandler function", function() {
    expect(notesView.registerNewNoteEventHandler).toContain(notesView.customerNote);
  });

})