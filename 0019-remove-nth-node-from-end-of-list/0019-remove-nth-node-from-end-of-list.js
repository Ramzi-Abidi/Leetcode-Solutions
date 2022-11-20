var removeNthFromEnd = function(head, n) {
    
    
    let length = 0 ;
    let curr = head ;
  
    
    while(curr !== null) {
        length++ ;
        curr = curr.next ;
    }
    
    if(length === n) {
        head = head.next ;
        return head;
    }
    
    let nb = length-n ;
    
    curr = head ;
    
    nb-- ;
    
    while(nb--) {
        curr = curr.next ;  
    }
    
    curr.next = curr.next.next ;
    
    return head ;
};