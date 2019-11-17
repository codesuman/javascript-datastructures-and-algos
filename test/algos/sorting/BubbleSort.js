import { expect } from "chai";
import BubbleSort from "../../../src/algos/sorting/BubbleSort";

describe("BubbleSort ->", function() {
  let bs;
  let values;
  let sortedValues;

  before(function() {
    values = [50, 75, 25, 80, 100, 45, 60, 20, 10];

    sortedValues = [...values];
    sortedValues.sort((x, y) => x - y);

    bs = new BubbleSort(values);
  });

  describe("#sort()", function() {
    it(`should return sorted values`, function() {
      expect(bs.getValues()).to.deep.equal(sortedValues);
    });
  });

  after(function() {
    bs = null;
    values = null;
    sortedValues = null;
  });
});
