class MyQueue {
    
    constructor() {
        this.firstStack = [];
        this.secondStack= [];
    }

    push(x) {
        this.firstStack.push(x);
    }

    peek() {
        if(this.firstStack.length === 0) {
            return null ;
        }
        return this.firstStack[0] ;
    }

    pop() {
        if(this.firstStack.length === 0) {
            return null ;
        }
        
        while(this.firstStack.length>1) {
            this.secondStack.push(this.firstStack.pop());
        }
        
        let removedEl = this.firstStack.pop();
        
        while(this.secondStack.length>0) {
            this.firstStack.push(this.secondStack.pop());
        }

        return removedEl ;
    }

    empty() {
        if(this.firstStack.length === 0){
         return true ;
         }
        else return false ;
    }

}
