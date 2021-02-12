// https://www.youtube.com/watch?v=OjdSaqQcsMo&list=PLeLwVYBodOL0npQy3bHOOAGH-6Uf-HY2d&index=22

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if (!this.first) {
            return null;
        }
        return this.first;
    }

    enqueue(data) {
        const node = new Node(data);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        const oldFirst = this.first;
        if (this.first == this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return oldFirst;
    }
}