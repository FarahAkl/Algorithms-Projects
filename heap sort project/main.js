let a = document.getElementById("inputArr");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

function heapSort(array) {
  const n = array.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [array[0], array[i]] = [array[i], array[0]];

    // Call heapify on the reduced heap
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, size, rootIndex) {
  let largest = rootIndex; // Initialize largest as root
  const leftChild = 2 * rootIndex + 1; // Left child index
  const rightChild = 2 * rootIndex + 2; // Right child index

  // Check if left child is larger than root
  if (leftChild < size && array[leftChild] > array[largest]) {
    largest = leftChild;
  }

  // Check if right child is larger than the largest so far
  if (rightChild < size && array[rightChild] > array[largest]) {
    largest = rightChild;
  }

  // If the largest is not root, swap and continue heapifying
  if (largest !== rootIndex) {
    [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];
    heapify(array, size, largest);
  }
}

submit.addEventListener("click", function (e) {
  let arr = a.value.trim().split(" ").map(Number);
  let b = heapSort(arr);
  output.innerHTML = b;
  e.preventDefault();
});
