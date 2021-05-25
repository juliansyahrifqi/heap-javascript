class BinaryHeap {
    constructor() {
        this.list = [];
    }

    shiftUp() {
        let index = this.list.length - 1;
        // const parentIndex = Math.floor(index / 2);

        while(index > 0) {
            const parentIndex = Math.floor((index-1)/ 2);

            if(this.list[parentIndex] >= this.list[index]) {
                [this.list[index], this.list[parentIndex]] = [this.list[parentIndex], this.list[index]];
            
                // Same like code below

                // let temp = this.list[index];
                // this.list[index] = this.list[parentIndex];
                // this.list[parentIndex] = temp;
    
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    shiftDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;

        const totalData = this.list.length;

        if(index <= totalData && this.list[index] > this.list[leftChild]) {
            smallest = leftChild;
        }

        if(index <= totalData && this.list[smallest] > this.list[rightChild]) {
            smallest = rightChild;
        }

        if(smallest !== index) {
            // Swap the data between this.list[index] and this.list[smallest] with ES6
            [this.list[index], this.list[smallest]] = [this.list[smallest], this.list[index]];

            // Same like code below

            // let temp = this.list[index];
            // this.list[index] = this.list[smallest];
            // this.list[smallest] = temp;

            // Recursive
            this.shiftDown(smallest);
        }
    }

    insertData(value) {
        // Add data to the array in the last index
        this.list.push(value);

        // Do the reorganize (shift up) the data
        this.shiftUp();
    }

    deleteData() {
        // Get the root value
        let root = this.list[0];

        // Root filled with the last data
        root = this.list.pop();

        // Do the reorganize ( shiftDown )
        this.shiftDown(0);

        return root;    
    }
}

const heap = new BinaryHeap();

for(let i = 8; i >= 0; i--) {
    heap.insertData(i);
}
// heap.insertData(5);
// heap.insertData(7);
// heap.insertData(8);
// heap.insertData(9);
// heap.insertData(12);
// heap.insertData(18);
// heap.insertData(25);

console.log(heap.list);