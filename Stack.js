// https://www.youtube.com/watch?v=2ge--J59WrI&list=PLeLwVYBodOL0npQy3bHOOAGH-6Uf-HY2d&index=21

class Stack {
    constructor() {
        this.top = null;
        // this.bottom = null;
        this.length = 0;
    }

    push(data) {
        const node = new Node(data);

        if (!this.top) {
            this.top = node;
            // this.bottom = node;
        } else {
            let origTop = this.top;
            this.top = node;
            this.top.next = origTop;
        }
        this.length++;
    }

    pop() {
        const origTop = this.top;
        if (this.length == 1) {
            this.top = null;
            // this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return origTop;
    }

    peek() {
        if (this.top) { return this.top; }
    }
}