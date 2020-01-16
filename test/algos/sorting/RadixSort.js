import { expect } from "chai";
import RadixSort from "../../../src/algos/sorting/RadixSort";

describe("RadixSort ->", function() {
  let rs;
  let values;
  let sortedValues;

  before(function() {
    values = [50, 75, 25, 80, 100, 45, 60, 20, 10];

    sortedValues = [...values];
    sortedValues.sort((x, y) => x - y);

    rs = new RadixSort(values);
  });

  describe("#sort()", function() {
    it(`should return sorted values`, function() {
      expect(rs.getValues()).to.deep.equal(sortedValues);
    });
  });

  after(function() {
    rs = null;
    values = null;
    sortedValues = null;
  });
});
