/**
 * Implement double-ended (deque) queue that stores string
 */
class Deque {
  constructor() {
    /**
     * tail which will keep track of the number of elements in the queue.
     * items object which will store the elements.
     * since we will be removing elements from the front of the queue,
     * we also need a variable to help us track the first element.
     * For this purpose, we declare the head variable
     */
    this.items = {};
    this.tail = 0;
    this.head = 0;
  }

  size() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.size() === 0;
  }

  addBack(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  /**
   *
   * When adding an element at the front Deque, There are three scenarios
   * If the Deque is Empty then same as addBack method ({1})
   * When an element is removed from the front of the Deque ({2}),head will be greater > zero,
   * Then decrement the head position
   * Assign the element to that object key.
   * If the head is equal to zero then, we need to shift the element by one position right
   * and free the first position and assign the element to that object key ({3})} element
   */
  addFront(element) {
    if (this.isEmpty) {
      this.addBack(element);
    } else if (this.head > 0) {
      this.head--;
      this.items[this.head] = element;
    } else {
      for (let index = this.tail; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }
      this.items[0] = element;
      this.tail++;
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.tail - 1];
    delete this.items[this.tail - 1];
    this.tail--;
    return result;
  }

  clear() {
    this.items = {};
    this.tail = 0;
    this.head = 0;
    return this.items;
  }
}
