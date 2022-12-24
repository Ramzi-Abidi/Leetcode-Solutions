class UnionFind {
    constructor(size) {
        this.ids = [];
        this.size = size;

        // initializing the array
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
        }
    }
    /* 
    root(p) {
        while (this.ids[p] !== p) {
            p = this.ids[p];
        }
        return p;
    } */

    // find method will return the parent of x
    find(p) {
        while (this.ids[p] !== p) {
            p = this.ids[p];
        }
        return p;
    }

    // union the two elements p and q (which means setting the parent of p to q)
    union(p, q) {
        const rootp = this.find(p);
        const rootq = this.find(q);
        this.ids[rootp] = rootq;
    }
}

const findRedundantConnection = (edges) => {
    const uf = new UnionFind(edges.length + 1); //uf is an object that has two properties/attributes "ids" and "size"


    for (let edge of edges) {
        let [u, v] = edge;
        // when u and f have the same parent
        if (uf.find(u) === uf.find(v)) {
            return edge;
        }
        uf.union(u, v);
    }
};