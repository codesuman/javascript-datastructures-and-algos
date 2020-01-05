import { expect } from "chai";
import QuickSort from "../../../src/algos/sorting/QuickSort";

describe("QuickSort ->", function() {
  let qs;
  let values;
  let sortedValues;

  before(function() {
    values = [50, 75, 25, 80, 100, 45, 60, 20, 10];

    sortedValues = [...values];
    sortedValues.sort((x, y) => x - y);

    qs = new QuickSort(values);
  });

  describe("#sort()", function() {
    it(`should return sorted values`, function() {
      expect(qs.getValues()).to.deep.equal(sortedValues);
    });
  });

  after(function() {
    qs = null;
    values = null;
    sortedValues = null;
  });
});
