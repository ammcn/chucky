##### Data Structures
- Way of organizing data in computers so operations dealing with them can be more efficient

###### TYPES of data structures
- *Arrays*: Structure with fixed size(can't delete/insert), can hold data types & arrays(2-dimensional array), also indexed
  - *Associative Arrays*: Every key can only appear once

  - Can traverse/iterate
  - Can search by value/index
  - Can update value by index

  - Can access nth element in O(1)
  - Can sequentially search in O(n)
  - Can insert in O(n), worse at beginning - causes all elements to shift
  - Can delete in O(n), worse at beginning - causes all elements to shift

  - Used as building block for other data structures(array lists, heaps, hash tables, vectors & matrices)
  - Used for sorting [algorithms](../../Terms/algorithms.md)(insertion sort, quick sort, bubble sort & merge sort)


- *Linked Lists*: Sequential structure with linear nodes that point to eachother, unable to access data randomly
  - Elements in a linked list are known as nodes
  - Each node contains a key & pointer, pointing to the successor, known as "next"
  - Head attribute points to first element in linked list
  - Last element is known as tail, points to `null`

  - Can access nth element in O(n) time
  - Can search nth element in O(n) time
  - Can insert element in O(1), if we are already where we want to insert
  - Can delete element in O(1), if we are already know the address of soon to be deleted node

  - *Singly Linked List*: Traversal through items can only be done in a forward sequence
  - *Double Linked List*: Traversal through items can happen fowards or backwards, nodes have "prev" attribute pointing to the predecessor
  - *Circular Linked List*: Previous pointer of the "head" points to "tail", next pointer of tail points to "head"
  - *Circular Doubly Linked List*: Previous pointer of the "head" points to "tail", next pointer of tail points to "head", also bidirectional

  - Can search by element's key
  - Can insert key, beginning, middle, end
  - Can delete node, beginning, middle, end
  
  
  - Used for "symbol table management" in compiler design
  - Circular linked list is used for switching between programs "Alt + tab"
  - Used for hash tables, when key-value reaches length >1


- *Stacks*: LIFO(Last In, First Out), resembles stack of items, like plates
  - *Push*: insert element into top of the stack
  - *Pop*: Delete the topmost element of the stack
  - *Peek/Top*: Return top element of stack, without deletion
  - *Size*: Determine size of stack
  - *isEmpty*: Check if stack is empty
  - *isFull*: Check if stack is full(a limit can be placed)

  - Can insert at O(1) time, at end
  - Can delete at O(1) time, at end
  - Can access an element at O(n) time, in worse case scenario

  - Used for expression evaluation
  - Used for function calls in recursion
  - Used for reversing a string

- *Queues*: Linear, FIFI(First In, First Out), resembles people waiting in line
  - *Enqueue*: Insert element into end of queue(last to be called)
  - *Dequeue*: Remove element from beginnign of queue(next to be called)
  - *Front*: Returns element at the top of queue
  - *Rear*: Returns element at the back of queue
  - *isEmpty*: Check if queue is empty
  - *Size*: Determine the size of queue

  - Used to manage threads in multithreading
  - Used for queue systems(duh)

  - *Circular Queue*: Same as linear queue, last element is just followed by the first element
  - *Priority Queue*: Special type of queue, arranges elements based on some specified priority
  - *Dequeue*: Double ended queue, does not obey FIFI, can add remove elements off both sides of queue

- *Hash Tables*: Stores values with associative keys, efficient lookups when we know key, efficient with inserting & searching irrespective of data size
  - Typically an array
  - *Direct Addressing*: Uses one-to-one mapping between keys & values
                      - *What if data set is bigger than number of slots available in hash table?*
                        Table is iterated over, providing use of linked-list(metioned above)

                                h(k) = k % m
                          h = hash funxction
                          k = key
                          % = modulo
                          m = slots available, preferable prime not close to 2

                        Assuming "m" is height, over each iteration, table data increases by width(linked-lists)
  - *Perfect Hash Function*: Every key is mapped into a unique slot index
  - Good hash tables consist of:
    - Compute efficiently
    - Distribute keys uniformly
    - Minimize collisions(see below)
    - Handle high-load factor(items in table divided by size of table)
    - *Collision*: When two keys clash
      - Can prevent by chaining, point to link list, requires memory outside of table
      - *Open Addressing*: All elements are stored in hash tables itself, each entry is record or NIL. When searching, we traverse each node until match is found or exhausted
  - Why use hashing over Binary Search Tree??
    - Hashing
      - unordered
      - can be complex to implement
      - can remove duplicates from set of elements
      - find frequency of items
    - Binary Search Tree
      - ordered
      - simple to implement
      - efficiently find floor/ceil values


- *Trees*: Binary tree where data is stored hierarchically, stored in sorted order
  - Implemented mainly using links
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
    - *Binary Tree*: can be traverse following ways:
      - Depth First Traversal:
        - Inorder (Left-Root-Right)
        - Preorder (Root-Left-Right)
        - Postorder (Left-Right-Root) 
      - Breadth-First Traversal: Level by level traversal
      - Maximum number of nodes:
              2h + 1 – 1
      - Tree traversal takes O(n) time

    - *Binary Search Tree*: Main function is to search for an element, obviously
      - Left subtree key is less than current node's key
      - Right subtree key is greater than current node's key
      - Left & right subtree must be binary search tree

      - Search, O(h), h being height
      - Insertion, O(h)
      - Deletion, O(h)
      - Extra Space, O(n) for pointers, n being # of nodes

    - *AVL Tree*: TODO

    - *Red-Black Tree*: TODO

    - *Splay Tree*: TODO

    - *Trie*: Typically used for searching wether or not a word exists in tree
      - Parent takes length of string and string itself, if length is greater than height of tree we return false
      - Iterates over each level until we find a match, traveresing down each vertice

      - Used for spell checking
      - Used for word games

    - *Segment Tree*: TODO

    - *Suffix Tree*: TODO

    - *Heaps*: Special case of binary tree where parent value is compared to children & arranged accordingly, can be represented using Trees and Arrays
      - All levels are filled, leafnodes are whatever direction-most we're counting from
      - *Min Heap*: Root contains minimum value of the heap, parent is less <|= children
        - Get minimum, O(1)
        - Extract minimum, O(Log n)
        - Decrease key, O(Log n)
        - Insert, O(Log n)
        - Delete, O(Log n)
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

  - *Weighted Graph*: Weight is associated with edges, in other words a value/weight is assigned to each edge
  - *UnWeighted Graph*: No weight associated with edges
  
  - *Directed Graph*: All edges have direction pointing to start-vertex/root-node
            (u, v)
      - u: original starting vertex
      - v: destination vertix
  - *Undirected Graphs*: All edges have no direction, can go both ways between two vertices/nodes
  
  - Self loop is vertice/node with no outer pointing edge

- *Set*: TODO

