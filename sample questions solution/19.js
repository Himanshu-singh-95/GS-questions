// 07_Search Tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(data = null) {
    this.root = data;
  }

  put(data) {
    const root = this.root;
    /**
     * If the root node is empty
     * set a new node to root node
     */
    if (root == null) {
      this.root = new Node(data);
      return;
    }

    /* Otherwise, recur down the tree */
    const insertRec = (root) => {
      if (data < root.data) {
        if (root.left == null) {
          root.left = new Node(data);
          return;
        }
        insertRec(root.left);
      } else if (data > root.data) {
        if (root.right == null) {
          root.right = new Node(data);
          return root;
        }
        insertRec(root.right);
      }
    };

    return insertRec(root);
  }

  contains(data) {
    const root = this.root;
    const search = (root, data) => {
      // Base Cases: root is null or data is present at root
      if (root == null) return false;
      if (root.data == data) return true;

      // data is greater than root's data
      if (root.data < data) return search(root.right, data);

      // data is smaller than root's data
      return search(root.left, data);
    };

    return search(root, data);
  }

  inorder() {
    const arr = [];
    // A recursive function to
    // do inorder traversal of BST
    const inorderRec = (root, arr) => {
      if (root != null) {
        inorderRec(root.left, arr);
        arr.push(root.data);
        inorderRec(root.right, arr);
      }
    };

    inorderRec(this.root, arr);

    return arr.join();
  }

  findMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

let tree = new BST();

/* Let us create following BST
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 
*/
tree.put(50);
tree.put(30);
tree.put(20);
tree.put(40);
tree.put(70);
tree.put(60);
tree.put(80);

console.log(tree.root);
console.log(tree.contains(60));
console.log(tree.contains(90));
console.log(tree.findMax());
console.log(tree.findMin());
console.log(tree.inorder());
