// class  BinaryHeap{
//     constructor(){
//       this.heap = [30, 20, 10, 7, 9, 5]
//     }
    
//      insert(value){
  
//       this.heap.push(value)
//        this.bubbleUp();
//     }
  
//     //using iterative approach
//        bubbleUp(){
//          let index =  this.heap.length-1;
  
//       while( index > 0){
//          let element = this.heap[index],
//              parentIndex = Math.floor((index-1)/2),
//              parent = this.heap[parentIndex];
  
//          if(parent >= element) break
//             this.heap[index] = parent;
//            this.heap[parentIndex] = element;
//             index = parentIndex
  
//       }
//     }
    
//     extractMax(){
//       const max = this.heap[0];
//       this.heap[0]= this.heap.pop()
//       this.sinkDown(0)
//       return max
//     }
    
//    sinkDown(index){
       
//        let   left = 2*index+1,
//              right = 2*index+2,
//              largest = index;
//        const length = this.heap.length
      
   
       
//         if(left <= length &&  this.heap[left]>this.heap[largest] ){
//            largest = left
//          }
//         if(right <= length && this.heap[right]>this.heap[largest]) {
//           largest = right
//         }
//        // swap
//        if(largest !== index){
//           [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
//          this.sinkDown(largest)
//        }
//       } 
   
//   }

class BinaryHeap {
    constructor() {
        this.list = [];
    }

    shiftUp() {
        let index = this.list.length - 1;
        const parentIndex = Math.floor(index / 2);

        while((index > 0) && (this.list[parentIndex] > this.list[index])) {
            [this.list[index], this.list[parentIndex]] = [this.list[parentIndex], this.list[index]];
            
            // Same like code below

            // let temp = this.list[index];
            // this.list[index] = this.list[parentIndex];
            // this.list[parentIndex] = temp;
            index = parentIndex;
            
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

for(let i = 10; i >= 0; i--) {
    let random = Math.floor(Math.random(2) + i);
    heap.insertData(random);
}
// heap.insertData(5);
// heap.insertData(7);
// heap.insertData(8);
// heap.insertData(9);
// heap.insertData(12);
// heap.insertData(18);
// heap.insertData(25);
// heap.deleteData();

console.log(heap.list);