// const testData = [4,2,1,3];
// const testData = [-1,5,3,4,0];
const testData = [-1,5,3,4,0,-7,-8];

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function addNode(value) {
    if (head == null) {
        head = new Node(value)
        return;
    }

    let currentNode = head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
}

function printList(list) {
    let sequence = '';
    let currentNode = list;
    while (currentNode !== null) {
        sequence += `${currentNode.data} `;
        currentNode = currentNode.next;
    }
    console.log('===list', sequence);
}

function mergeSort(head) {
  /*
  1. if head is null or head.next is null then return head
  2. divide ll into half
  3. recursively sort
  4. merge sorted halves back
  5. append remaining nodes
  */

  if (head == null || head.next == null) {
    return head;
  }

  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;

  let firstHalf = mergeSort(head);
  secondHalf = mergeSort(secondHalf);

  let sortedList = null;
  let tail = null;
  while (firstHalf != null && secondHalf != null) {
    if (firstHalf.data <= secondHalf.data) {
      if (sortedList == null) {
        sortedList = firstHalf;
        tail = firstHalf;
      } else {
        tail.next = firstHalf;
        tail = tail.next;
      }
      firstHalf = firstHalf.next;
    } else {
      if (sortedList == null) {
        sortedList = secondHalf;
        tail = secondHalf;
      } else {
        tail.next = secondHalf;
        tail = tail.next
      }
      secondHalf = secondHalf.next;
    }
  }

  if (firstHalf != null) {
    tail.next = firstHalf;
  } else {
    tail.next = secondHalf;
  }

  return sortedList;
}

let head;

testData.forEach(addNode);
console.log('list before sort:');
printList(head)

const sortedList = mergeSort(head);
console.log('list after sort:');
printList(sortedList)
