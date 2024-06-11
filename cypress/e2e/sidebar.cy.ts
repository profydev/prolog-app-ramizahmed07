describe("Support Button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
    cy.viewport(1025, 900);
  });

  it("opens an email client when the support button is clicked", () => {
    const emailLink = "mailto:support@prolog-app.com?subject=Support%20Request";

    cy.window().then((win) => {
      const windowOpenStub = cy.stub(win, "open").as("windowOpen");

      cy.get("nav")
        .contains("Support") // replace with your selector
        .click()
        .then(() => {
          expect(windowOpenStub).to.be.calledWith(emailLink);
        });
    });
  });
});
