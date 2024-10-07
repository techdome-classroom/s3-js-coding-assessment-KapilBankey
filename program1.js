/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length();
    if(len %2 !=0){
      return false;
    }
    else { 
       for(var i=0;i<len;i++){
        if(s[i] == "(" || s[i] ==")")

       }
    }


};

module.exports = { isValid };


