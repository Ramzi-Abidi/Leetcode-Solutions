
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let temp;
    while (curr !== null) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
   return prev ;
};