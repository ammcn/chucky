// Javascript Linked List
console.log("\n\n\n\n\n\n\n\n\n\nJAVASCRIPT LINKED LIST")



// Typical node, with "data" being where the nodes value is stored, and "next" being the next node
// last item of linked list is always pointing to `null`
class ListNode {
  constructor(data) {
      this.data = data
      this.next = null
  }
}
// creation of first node with a "data" value of "First Content"
const node1 = new ListNode("First Content")
// creation of second node with a "data" value of "Second Content"
const node2 = new ListNode("Second Content")
// linking first node's "next" attribute to the second created node
node1.next = node2



// Formal declaration of list class - not called first, expects root node as head parameter, which includes children
class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}
// Declaration of list, which includes pre-created nodes
const list = new LinkedList(node1)
// log checkpoint
console.log("\nINFO: Simple Linked List with two Nodes\nEXAMPLE:\n", list)



// Adding two more nodes to the end of previously created list
const node3 = new ListNode("Third Content")
const node4 = new ListNode("Fourth Content")
node3.next = node4
list.head.next.next = node3
// Traversing the list
console.log("\nINFO: Traversing all four nodes, accessed using initial list\nEXAMPLE:")
function logList() {
  let currentNode = list.head
  while (currentNode != null) {
    console.log(currentNode.data + " ")
    currentNode = currentNode.next;
  }
}
logList()



// Adding new head to previously created list
const node0 = new ListNode("Initial Content")
node0.next = list.head
list.head = node0
console.log("\nINFO: Adding new head using initial list\nEXAMPLE:", list)



// Insert new node after a selected node
node5 = new ListNode("Fifth Content")
console.log("\nINFO: Traversing all six nodes, with fifth inserted in middle. Accessed using initial list\nEXAMPLE:")
function insertAfter(prevNode, insertedNode) {
  // Can be used for inserting at end of list, or in the middle
  if (prevNode === null) {
    return console.log("prevNode can't be null")
  }

  insertedNode.next = prevNode.next
  prevNode.next = insertedNode
}
insertAfter(list.head.next.next, node5)
logList()



// Delete 'fifth' value node by index
console.log("\nINFO: Traversing all nodes, after fifth deleted from the middle by index. Accessed using initial list\nEXAMPLE:")
function deleteNode(delete_index) {
  let current_index = 0
  let current_node = list.head
  let prev_node = null

  while (current_index <= delete_index) {
    if (current_index === delete_index) {
      if (prev_node) {
        prev_node.next = current_node.next
      } else {
        list.head = current_node.next
      }
    }
    prev_node = current_node
    current_node = current_node.next
    current_index += 1
  }
}
deleteNode(3)
logList()



// Get length of list recursively
console.log("\nINFO: Revursively get length of list\nEXAMPLE:")
function getCountRec(node) {
  // Base case
  if (node == null)
      return 0;

  // Count is this node plus rest of the list
  return 1 + getCountRec(node.next);
}
function getCount(head) {
  return getCountRec(head);
}
console.log(getCount(list.head))