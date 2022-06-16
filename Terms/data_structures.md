##### Data Structures
- Way of organizing data in computers so operations dealing with them can be more efficient

###### TYPES of data structures
- *Arrays*: Structure with fixed size(can't delete/insert), can hold data types & arrays(2-dimensional array), also indexed
  - Can traverse/iterate
  - Can search by value/index
  - Can update value by index
  
  - Used as building block for other data structures(array lists, heaps, hash tables, vectors & matrices)
  - Used for sorting [algorithms](../../Terms/algorithms.md)(insertion sort, quick sort, bubble sort & merge sort)

- *Linked lists*: Sequential structure with linear nodes that point to eachother, unable to access data randomly
  - Elements in a linked list are known as nodes
  - Each node contains a key & pointer, pointing to the successor, known as "next"
  - Head attribute points to first element in linked list
  - Last element is known as tail

  - *Singly linked list*: traversal through items can only be done in a forward sequence
  - *Double linked list*: traversal through items can happen fowards or backwards, nodes have "prev" attribute pointing to the predecessor
  - *Circular linked list*: previous pointer of the "head" points to "tail", next pointer of tail points to "head"

  - Can search by element's key
  - Can insert key, beginning, middle, end
  - Can delete node, beginning, middle, end
  
  - Used for "symbol table management" in compiler design
  - Circular linked list is used for switching between programs "Alt + tab"