describe("Time", function() {

  it("Время 12:30", function() {
    assert.equal(Time("12:30"), "Good evening!");
  });

  it("Время 11:59", function() {
    assert.equal(Time("11:59"), "Good morning!");
  });
  it("Время 01:42", function() {
    assert.equal(Time("01:42"), "Good morning!");
  });

  it("Время 15:53", function() {
    assert.equal(Time("15:53"), "Good evening!");
  });
  it("Время 05:14", function() {
    assert.equal(Time("05:14"), "Good morning!");
  });

  it("Время 21:03", function() {
    assert.equal(Time("21:03"), "Good evening!");
  });
});
