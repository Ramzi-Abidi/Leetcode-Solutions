var sumNumbers = function(root) {
    const dfs=(root,res,ch)=> {
        if(!root) {
            return;
        }
        if(!root.left && !root.right) {
            ch+=String(root.val);
            res.push(ch);
        }
        else {
            ch+=String(root.val);
            dfs(root.left,res,ch);
            dfs(root.right,res,ch);
        }
    }
    let res=[];
    dfs(root,res,"");

    let s=0;
    res.forEach((el)=>{
        s+=parseInt(el);
    })

    return s;
};