# 02 Introduction to Sorting Algorithms

Sorting is a fundamental operation in computer science that involves arranging elements in a specific order, typically in ascending or descending order. It plays a vital role in various domains, ranging from data organization to search algorithms and optimization problems. Understanding sorting algorithms and their applications is crucial for efficient data manipulation and retrieval in a wide range of computational tasks.

In the world of computer science, sorting is the process of organizing data to make it more manageable and accessible. Sorting is also vital for improving user experiences. 

The applications of sorting algorithms are widespread across various domains. Here are a few notable examples:

- **Databases:** Sorting is integral to database management systems. By sorting data based on specific criteria, databases can efficiently retrieve information, perform searches, and execute complex queries. Sorting also enables the indexing of data, which accelerates data access operations and enhances the overall performance of database systems.
- **Information Retrieval:** Search engines heavily rely on sorting algorithms to provide accurate and relevant search results. Sorting helps rank search results based on relevance, popularity, or other criteria, ensuring that users receive the most pertinent information first.
- **Computational Biology:** Sorting algorithms find applications in processing and analyzing genomic data, protein sequences, and other biological datasets. Sorting allows for identifying patterns, detecting similarities, and performing advanced algorithms for gene expression analysis, sequence alignment, and DNA sequencing.
- **Operating Systems:** Operating systems employ sorting algorithms in various tasks such as task scheduling, memory management, and file systems. Sorting aids in organizing processes, allocating system resources efficiently, and improving overall system performance.
- **Network Routing:** Sorting plays a role in network routing algorithms used in computer networks. By sorting network nodes based on distances or network metrics, routing protocols can determine the optimal paths for data packets, ensuring efficient data transmission and minimizing network congestion.


## Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order. This process continues until the entire array is sorted. While easy to implement, Bubble Sort may not be efficient for large datasets due to its average and worst-case time complexity of O(N^2). However, Bubble Sort can perform well **on nearly sorted arrays where only a few elements are out of order**.

Due to its nested loop structure, bubble sort is not considered efficient for large datasets. It performs a comparison and potential swap for every pair of elements in the array, leading to many unnecessary operations. Additionally, if the swapping or comparison operations are costly, the inefficiency of bubble sort becomes more pronounced.

### Algorithm

Assuming we want to sort an array in ascending order, bubble sort works like this:

1. The algorithm starts by comparing the first two elements of the array.
    - If the first element is greater than the second element (in ascending order), they are swapped.
    - If they are in the correct order, no change is made.
2. The algorithm then moves to the next pair of elements (the second and third elements) and compares them.
3. This process continues, comparing and swapping adjacent elements until the end of the array is reached.
4. At the end of the first iteration, the largest element in the array will be in its correct position at the end.
5. The algorithm then starts the next iteration, repeating steps 1 to 3, but excluding the last element, as it is already in its correct position.
6. Each iteration moves the next largest element to its correct position at the end of the remaining unsorted portion of the array.
7. The iterations continue until no more swaps are needed, indicating that the array is completely sorted.
If we wanted to sort the array in descending order, then we would use a "less than" comparison instead of "greater than", and that would move the smaller elements toward the end of the array.

### Implementation

```js
function bubbleSort(array) {
  const len = array.length;

  for (let i = 0; i < len - 1; i++) {
     // Flag to track if any swaps were made
    let swapped = false;

    // Last i elements are already in place
    for (let j = 0; j < len - 1 - i; j++) {

      // Check if the element in the current iteration is greater than the one in the next iteration
      if (array[j] > array[j + 1]) {
        // Swapping elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true
      }
    }
    if (!swapped) {
      // If no swaps were made in this iteration, the array is already sorted
      break;
    }
  }

  return array;
}
```

## Selection Sort

Selection Sort works by repeatedly finding the minimum or maximum element from the unsorted part of the array and placing it in its correct position. This process is repeated until the entire array is sorted. Although Selection Sort has a similar time complexity to Bubble Sort, it typically performs fewer swaps. It can be a suitable choice **when the cost of swapping elements is high**.

It minimizes the number of swaps by performing only a single swap after finding the smallest element in each pass. This reduction in the total number of swaps makes selection sort more efficient, particularly when the cost of swapping elements is high.

### Algorithm

1. The algorithm divides the array into two parts: the sorted part and the unsorted part.
2. Initially, the sorted part is empty, and the unsorted part contains the entire array.
3. In each pass, the algorithm scans the unsorted part of the array to find the smallest element.
4. Once the smallest element is identified, it is swapped with the leftmost element of the unsorted part (the element at the boundary of the sorted and unsorted parts).
5. After the swap, the boundary between the sorted and unsorted parts is shifted one position to the right.
6. The selected element is now considered part of the sorted part, and the unsorted part is reduced by one element.
7. Steps 3 to 6 are repeated until the unsorted part contains just one element, which means it must be sorted. Consequently, the entire array is sorted.

### Implementation

```js
function selectionSort(array) {
  const len = array.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}
```

## Insertion Sort

Insertion Sort builds the final sorted array by iteratively inserting elements into their correct positions within the sorted portion. It has a time complexity of O(N^2), but it performs well **on small arrays or partially sorted data**. In scenarios where the input is partially sorted or nearly sorted, Insertion Sort **can outperform more complex algorithms like Merge Sort or Quick Sort**.

When comparing Insertion Sort with Selection Sort and Bubble Sort in terms of worst-case time complexity, all three algorithms have the same O(N^2) time complexity. However, in practice, Insertion Sort often outperforms these algorithms for certain scenarios; in cases where comparisons are costly, Insertion Sort would be the preferred option. Its performance can be remarkable in scenarios where the input is partially sorted or nearly sorted, and swapping operations are not costly.

### Algorithm

1. Start with the second element in the array (index 1).
2. Temporarily remove that element from the array, creating a gap.
3. Compare the removed value to the elements on its left.
4. If an element on the left is greater than the removed value, shift it to the right.
5. Continue the shifting phase, by moving until a smaller value is encountered or the left end of the array is reached.
6. Insert the removed value into the current gap.
7. Move to the next element in the array and repeat steps 2 to 6 until you reach the end of the array.
8. The sorted portion of the array gradually grows from left to right with each pass-through, until the array is fully sorted.

### Implementation

```js
function insertionSort(array) {
  const len = array.length;

  for (let i = 1; i < len; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}
```

## General strengths and weaknesses

- **Bubble Sort** is straightforward but can be inefficient for large datasets, except when dealing with nearly sorted arrays where it can perform well.
- **Selection Sort** reduces the number of swaps and may be preferred when swapping elements is costly. However, it still has a time complexity of O(n^2) and may not be the most efficient choice for larger datasets.
- **Insertion Sort** excels in partially sorted or nearly sorted scenarios and is efficient for small arrays. One of the key advantages of Insertion Sort is that it typically performs fewer comparisons compared to Bubble Sort. This can make Insertion Sort more efficient in cases where comparisons are costly in terms of time or resources.
