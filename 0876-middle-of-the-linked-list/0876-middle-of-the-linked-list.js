var middleNode = function(head) {
       let curr = head;
        let nb = 0;

        while (curr !== null) {
            curr = curr.next;
            nb++;
        }

        nb = Math.floor(nb / 2);
        curr = head;

        while (nb !== 0) {
            curr = curr.next;
            nb--;
        };
        return curr ;
};