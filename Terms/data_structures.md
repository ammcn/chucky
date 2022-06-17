##### Data Structures
- Way of organizing data in computers so operations dealing with them can be more efficient

###### TYPES of data structures
- *Arrays*: Structure with fixed size(can't delete/insert), can hold data types & arrays(2-dimensional array), also indexed
  - Can traverse/iterate
  - Can search by value/index
  - Can update value by index
  
  - Used as building block for other data structures(array lists, heaps, hash tables, vectors & matrices)
  - Used for sorting [algorithms](../../Terms/algorithms.md)(insertion sort, quick sort, bubble sort & merge sort)

- *Associative Arrays*: TODO

- *Linked Lists*: Sequential structure with linear nodes that point to eachother, unable to access data randomly
  - Elements in a linked list are known as nodes
  - Each node contains a key & pointer, pointing to the successor, known as "next"
  - Head attribute points to first element in linked list
  - Last element is known as tail, points to `null`

  - *Singly Linked List*: Traversal through items can only be done in a forward sequence
  - *Double Linked List*: Traversal through items can happen fowards or backwards, nodes have "prev" attribute pointing to the predecessor
  - *Circular Linked List*: Previous pointer of the "head" points to "tail", next pointer of tail points to "head"

  - Can search by element's key
  - Can insert key, beginning, middle, end
  - Can delete node, beginning, middle, end
  
  - Used for "symbol table management" in compiler design
  - Circular linked list is used for switching between programs "Alt + tab"
  - Used for hash tables, when key-value reaches length >1


- *Stacks*: LIFO(Last In, First Out), resembles stack of something like plates
  - *Push*: insert element into top of the stack
  - *Pop*: Delete the topmost element of the stack
  - *Peek*: Return top element of stack, without deletion
  - *isEmpty*: Check if stack is empty
  - *isFull*: Check if stack is full(a limit can be placed)

  - Used for expression evaluation
  - Used for function calls in recursion

- *Queues*: FIFI(First In, First Out), resembles people waiting in line
  - *Enqueue*: Insert element into end of queue(last to be called)
  - *Dequeue*: Remove element from beginnign of queue(next to be called)

  - Used to manage threads in multithreading
  - Used for queue systems(duh)

- *Hash Tables*: Stores values with associative keys, efficient lookups when we know key, efficient with inserting & searching irrespective of data size
  - *Direct Addressing*: Uses one-to-one mapping between keys & values
                      - *What if data set is bigger than number of slots available in hash table?*
                        Table is iterated over, providing use of linked-list(metioned above)

                                h(k) = k % m
                          h = hash function
                          k = key
                          % = modulo
                          m = slots available, preferable prime not close to 2

                        Assuming "m" is height, over each iteration, table data increases by width(linked-lists)

- *Trees*: Binary tree where data is stored hierarchically, stored in sorted order
  - Each node consists of:
    - key: value stored in node
    - left(≤): pointer to left child
    - right(≥): pointer to right child
    - p: pointer to parent

        x.key ≤ y.key

  - Top node is root node
  - Each parent, children relationship is known as a "subtree"
  - Referring to bottom of single subtree is known as "leafnodes"
  - Used in the following:
    - *Binary Tree*: TODO

    - *Binary Search Tree*: TODO

    - *Heaps*: Special case of binary tree where parent value is compared to children & arranged accordingly, can be represented using Trees and Arrays
      - *Min Heap*: Root contains minimum value of the heap, parent is less <|= children
      - *Max Heap*: Root contains maximum value of heap, parent is >|= children

      - Used in heapsort algorithm
      - Used in priority queues
      - Used in queue functions using heaps in O(log n)
      - Used to find the kᵗʰ smallest/largest value in array

    - *Treaps*: TODO

- *Graphs*: Finite set of vertices/nodes and set of possibly multi-directional edges
  - Order is number of vertices in graph
  - Size is number of edges in graph
  - Adjacent vertices/nodes are connected through common edge
    - Isolated is node without edges
  
  - *Directed Graph*: All edges have direction pointing to start-vertex/root-node
            (u, v)
      - u: original starting vertex
      - v: destination vertix
  - *Undirected Graphs*: All edges have no direction, can go both ways between two vertices/nodes
  
  - Self loop is vertice/node with no outer pointing edge

- *Set*: TODO