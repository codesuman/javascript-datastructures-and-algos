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

    describe('#delete()', function() {
        it(`deleting small value`, function() {
            bst.delete(bst.getMinNode(bst.root).val);
            expect(bst.inOrderTraversal(bst.root)).to.deep.equal(ascendingValues.slice(1));
        });
    });

    describe.skip('#delete()', function() {
        it(`deleting root value`, function() {
            console.log(`Root value, BEFORE deleting root value, ${bst.root.val}`);
            console.log(bst.inOrderTraversal(bst.root));
            
            bst.delete(bst.root.val);

            console.log(`Root value, AFTER deleting root value, ${bst.root.val}`);
            console.log(bst.inOrderTraversal(bst.root));
            
            let temp = bstValues.slice(1).sort((x,y) => x-y);
            console.log(`Displaying semi sorted : `);
            console.log(temp);
            
            
            expect(bst.inOrderTraversal(bst.root)).to.deep.equal(temp);
        });
    });

    after(function() {
        bst = null;
    });
})
 