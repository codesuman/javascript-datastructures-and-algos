import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        this.root = this.insertNode(val, this.root);
    }

    insertNode(val, node){
        if(!node) return new BinarySearchTreeNode(val);

        if(val <= node.val) node.left = this.insertNode(val, node.left);
        else node.right = this.insertNode(val, node.right);

        return node;
    }

    delete(val){
        this.root = this.deleteNode(this.root, val);
    }

    deleteNode(node, val){
        if(!node) return node;

        if(val < node.val) node.left = this.deleteNode(node.left, val);
        else if(val > node.val) node.right = this.deleteNode(node.right, val);
        else // Element to be deleted is found 
        {
            if(!node.right) return node.left;
            if(!node.left) return node.right;
            
            let minNodeVal = this.getMinNode(node.right).val;

            node.val = minNodeVal;
            node.right = this.deleteNode(node.right, minNodeVal);
        }
        return node;
    }

    inOrderTraversal(node = this.root, resultArray = []){
        if(!node) return resultArray;

        if(node.left) resultArray = this.inOrderTraversal(node.left, resultArray);
        resultArray.push(node.val);
        if(node.right) resultArray = this.inOrderTraversal(node.right, resultArray);
        
        return resultArray;
    }

    reverseInOrderTraversal(node = this.root, resultArray = []){
        if(!node) return resultArray;

        if(node.left) resultArray = this.reverseInOrderTraversal(node.right, resultArray);
        resultArray.push(node.val);
        if(node.right) resultArray = this.reverseInOrderTraversal(node.left, resultArray);
        
        return resultArray;
    }

    findKthLargest(k, node = this.root){
        if(k < 0) return;

        if(node.right) k = this.findKthLargest(k, node.right);  
        
        // Decrement count
        k--; if(k===0) console.log(`\n\n\nWow found it : ${node.val}`);
        
        if(node.left) k = this.findKthLargest(k, node.left);

        return k;
    }

    /**
     * Starting from Root node, keep traversing recursively
     * in left & right direction till you find leaf nodes
     */
    displayAllLeafNodes(node = this.root){
        if(!node) return; // When node is null, return
        if(!node.left && !node.right) {
            // When both left & right nodes are null, then its LEAF
            console.log(node.val);
            return;
        }

        if(node.left) this.displayAllLeafNodes(node.left);
        if(node.right) this.displayAllLeafNodes(node.right);
    }

    getMinNode(node){
        if(!node) return node;

        if(node.left) return this.getMinNode(node.left);
        return node;
    }

    getMaxNode(node){
        if(!node) return node;

        if(node.right) return this.getMaxNode(node.right);
        return node;
    }

    isBinarySearchTree(node = this.root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER){
        if(!node) return true;

        // console.log(`Checking if BST : ${min} <= ${node.val} < ${max}`);
        return min <= node.val && node.val < max && this.isBinarySearchTree(node.left, min, node.val) && this.isBinarySearchTree(node.right, node.val+1, max);
    }

    replace(oldVal, newVal){
        // Find node with oldVal & then replace it with newVal
        console.log(`\n\n\nTrying to replace ${oldVal} with ${newVal}`);

        const oldNode = this.find(oldVal);

        if(oldNode) oldNode.val = newVal;
        else console.log(`\n\n\n${oldVal} not found...`);
    }

    find(val, node = this.root){
        if(!node || val === node.val) return node;

        if(val <= node.val) return this.find(val, node.left);
        if(val > node.val) return this.find(val, node.right);
    }

    displayAllTreePaths(node = this.root, displayVal = ''){
        if(!arguments[0]) console.log(`\n\n\nDisplaying all Tree Paths`);

        if(!node) return;

        if(!node.left && !node.right) {
            // Leaf node - log displayVal + node.val
            console.log(`${displayVal}${node.val}`);
            return;
        }

        let displayStr = `${displayVal}${node.val} -> `;

        if(node.left) this.displayAllTreePaths(node.left, displayStr);
        if(node.right) this.displayAllTreePaths(node.right, displayStr);        
    }
}

/**
 * PENDING :
 * 
 * heightOfBST()
 * delete()
 */

 // Algo Visuals : https://visualgo.net/el/bst
 