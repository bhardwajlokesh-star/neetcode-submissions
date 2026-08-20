class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix="";
        const n=Math.min(...strs.map(str=>str.length));
        for(let i=0; i<n; i++){
            for(let j=0; j<strs.length;  j++){
                if(strs[0][i]!==strs[j][i]){
                    return prefix;

                    }   
            }
                prefix += strs[0][i];                

        }
        return prefix;
    }
}

