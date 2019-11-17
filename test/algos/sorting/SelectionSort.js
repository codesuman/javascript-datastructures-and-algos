import { expect } from "chai";
import SelectionSort from "../../../src/algos/sorting/SelectionSort";

describe("SelectionSort ->", function() {
  let ss;
  let values;
  let sortedValues;

  before(function() {
    values = [50, 75, 25, 80, 100, 45, 60, 20, 10];

    sortedValues = [...values];
    sortedValues.sort((x, y) => x - y);

    ss = new SelectionSort(values);
  });

  describe("#sort()", function() {
    it(`should return sorted values`, function() {
      expect(ss.getValues()).to.deep.equal(sortedValues);
    });
  });

  after(function() {
    ss = null;
    values = null;
    sortedValues = null;
  });
});
