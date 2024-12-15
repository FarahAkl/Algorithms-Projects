# Algorithms-Projects

## Counting Sort

## Heap Sort

### Part A: Implementation of Heapsort Algorithm
Write all the required algorithms to sort a sequence of numbers using the Heapsort algorithm. This includes:

1. **Building a Max-Heap:**
   - Convert the input array into a Max-Heap, where each parent node is greater than or equal to its child nodes.

2. **Heapify Operation:**
   - Define the `Heapify` function to maintain the Max-Heap property by rearranging elements when a subtree violates the heap condition.

3. **Extract Maximum and Sort:**
   - Repeatedly remove the maximum element (root of the heap) and place it at the end of the array while maintaining the heap property for the remaining elements.

### Part B: Algorithm Analysis
Provide a detailed analysis of the algorithms written in Part A, including:

1. **Time Complexity:**
   - **Heapify:** Analyze the cost of maintaining the heap property for a subtree.
   - **Building a Max-Heap:** Derive the overall cost of building the heap from an unsorted array.
   - **Heapsort:** Calculate the time complexity of the sorting process using the Max-Heap.

## Implementation Plan

1. **Create a Max-Heap:**
   - Define a function `buildMaxHeap` that takes an array as input.
   - Iterate from the last non-leaf node to the root, applying the `Heapify` operation.

2. **Heapify Function:**
   - Define `Heapify(array, n, i)`, where `n` is the size of the heap, and `i` is the index of the current node.
   - Compare the current node with its left and right children and swap if necessary to maintain the heap property.
   - Recursively call `Heapify` on the affected subtree.

3. **Heapsort Algorithm:**
   - Use `buildMaxHeap` to transform the input array.
   - Repeatedly swap the root (maximum element) with the last element of the heap, reduce the heap size, and call `Heapify` to restore the heap property.

---

## Algorithm Analysis

### Time Complexity

1. **Heapify Operation:**
   - The time complexity of `Heapify` for a node is proportional to the height of the node. The worst-case height of a node is \( O(\log n) \).

2. **Building a Max-Heap:**
   - Building a Max-Heap involves calling `Heapify` for all non-leaf nodes. The overall cost is \( O(n) \).

3. **Heapsort:**
   - Extracting the maximum element \( n \) times involves \( O(\log n) \) work for each extraction. The total cost is \( O(n \log n) \).

**Overall Time Complexity:**
\( O(n \log n) \).

## Kruskal's algorithm

### Part A: Implementation of Kruskal's Algorithm
Write all the required algorithms to find the MST of a network using Kruskal’s algorithm. This includes:

1. **Graph Representation:**
   - Represent the graph using an edge list, where each edge is defined by its two vertices and weight.

2. **Sorting Edges by Weight:**
   - Sort all edges in non-decreasing order of their weights.

3. **Union-Find Data Structure:**
   - Implement the Union-Find data structure with path compression and union by rank to efficiently detect cycles and merge subsets.

4. **Building the MST:**
   - Iterate through the sorted edges, adding an edge to the MST if it does not form a cycle (using Union-Find for cycle detection).

### Part B: Algorithm Analysis
Provide a detailed analysis of the algorithms written in Part A, including:

1. **Time Complexity:**
   - **Sorting Edges:** Analyze the cost of sorting the edges.
   - **Union-Find Operations:** Evaluate the efficiency of path compression and union by rank.
   - **Kruskal’s Algorithm:** Derive the overall time complexity of finding the MST.


## Implementation Plan

1. **Graph Representation:**
   - Represent the graph as an edge list: `edges = [(u, v, w)]`, where `u` and `v` are vertices, and `w` is the weight of the edge.

2. **Sorting Edges:**
   - Use a sorting algorithm (e.g., quicksort or mergesort) or Python’s built-in `sorted()` to sort edges by weight.

3. **Union-Find Functions:**
   - Define `find(parent, x)` to locate the root of a subset with path compression.
   - Define `union(parent, rank, x, y)` to merge two subsets using union by rank.

4. **Kruskal’s Algorithm:**
   - Initialize the MST as an empty set.
   - Iterate through the sorted edges, using Union-Find to check for cycles and adding valid edges to the MST until it contains \( V-1 \) edges (where \( V \) is the number of vertices).

---

## Algorithm Analysis

### Time Complexity

1. **Sorting Edges:**
   - Sorting the edge list of size \( E \) takes \( O(E \log E) \).

2. **Union-Find Operations:**
   - Each `find` or `union` operation runs in \( O(\alpha(V)) \), where \( \alpha \) is the inverse Ackermann function, nearly constant for all practical purposes.

3. **Kruskal’s Algorithm:**
   - The overall time complexity is \( O(E \log E + E \alpha(V)) \), which simplifies to \( O(E \log E) \), as \( E \log E \) dominates.



