class Solution{
    hasDuplicate(nums){
        const map=new Map();
        for(let i of nums){
            if(map.has(i)){
            return true
            }
            map.set(i,true);
        }
        return false;
    
    }
}