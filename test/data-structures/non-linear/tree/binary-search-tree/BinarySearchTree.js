import { expect } from 'chai';
import BinarySearchTree from '../../../../../src/data-structures/non-linear/tree/binary-search-tree/BinarySearchTree';

describe('Binary Search Tree ->', function(){
    let bst;
    let bstValues;
    let ascendingValues;

    before(function(){
        bst = new BinarySearchTree();

        bstValues = [50, 75, 25, 80, 100, 45, 60, 20, 10];
        ascendingValues = bstValues.sort((x,y) => x-y);

        bstValues.forEach(val => {
            bst.insert(val);
        });
    });

    beforeEach('Checking if BST...', function() {
        bst.isBinarySearchTree();
    })

    describe('#getMinNode()', function() {
        it(`should return minimum node value`, function() {
            expect(bst.getMinNode(bst.root).val).to.equal(ascendingValues[0]);
        });
    });

    describe('#getMaxNode()', function() {
        it(`should return maximum node value`, function() {
            expect(bst.getMaxNode(bst.root).val).to.equal(ascendingValues[ascendingValues.length-1]);
        });
    });

    describe('#inOrderTraversal()', function() {
        it(`should return ascending order values`, function() {
            expect(bst.inOrderTraversal(bst.root)).to.deep.equal(ascendingValues);
        });
    });

    after(function() {
        bst = null;
    });
})
 