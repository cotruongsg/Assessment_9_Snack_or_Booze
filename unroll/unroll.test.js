const unroll = require("./unroll");


describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("should return the correct unrolled array for a square array", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const unrolledSquare = unroll(square);
    expect(unrolledSquare).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });

  it("should return the correct unrolled array for a smaller square array", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];

    const unrolledSmallerSquare = unroll(smallerSquare);
    expect(unrolledSmallerSquare).toEqual([
      "a",
      "b",
      "c",
      "f",
      "i",
      "h",
      "g",
      "d",
      "e",
    ]);
  });

  

});
