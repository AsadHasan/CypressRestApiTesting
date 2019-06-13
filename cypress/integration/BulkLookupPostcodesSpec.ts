describe("Bulk lookup of postcodes", () => {
  it("should return correct results", () => {
    const method = "POST";
    const body = {
      postcodes: ["OX49 5NU", "M32 0JG", "NE30 1DP"]
    };

    cy.request(method, "postcodes", body).then(response => {
      const responseBody = response.body.result;

      expect(responseBody.length).to.be.equal(3);

      expect(responseBody[0].result).to.have.property(
        "parish",
        "Brightwell Baldwin"
      );
      expect(responseBody[1].result).to.have.property(
        "parish",
        "Trafford, unparished area"
      );
      expect(responseBody[2].result).to.have.property(
        "parish",
        "North Tyneside, unparished area"
      );
    });
  });
});
