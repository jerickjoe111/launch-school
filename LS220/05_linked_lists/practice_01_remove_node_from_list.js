function printList(head) {
  let currentNode = head
  let nodeNumber = 1;
  while (currentNode) {
    console.log(`Node #${nodeNumber}: ${currentNode.data}`)
    currentNode = currentNode.next
    nodeNumber += 1
  }
}

function deleteFromList(value) {
  let previous = null
  let current = head
  if (!head) return null

  while (current) {
    if (current.data === value) {
      let nodeAfterDeleted = current.next
      if (previous) previous.next = nodeAfterDeleted
      else head = current.next
      
    } else {
      previous = current
    }

    current = current.next
  }

  return head
}

class Node {
  constructor(data, next) {
    this.data = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

let node4 = new Node(4)
let node3 = new Node(2, node4)
let node2 = new Node(3, node3)
let node1 = new Node(1, node2)
let head = new Node(1, node1)

printList(head)

deleteFromList(1)
console.log('...')
printList(head)