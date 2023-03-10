var detectCycle = function(head) {
    //linkedList has one or zero elements
    if (head === null || head.next === null) {
        return null;
    }
    
    //looking for cycle    
    let slow = head;
    let fast = head;
    let hasCycle = false;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    };

    //if there's no cycle
    if(!hasCycle) {
        return null;
    }

    //Initializing new pointer to head
    slow = head;
    
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
};