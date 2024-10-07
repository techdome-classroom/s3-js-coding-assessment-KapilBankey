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
      let c1=0;
      let c2 =0;
      let c3 = 0;
      let c4 = 0;
      let c5 = 0;
      let c6 = 0;

       for(var i=0;i<len;i++){
        if(s[i] == "(" || s[i] ==")" || s[i] == "[" || s[i] == "]" || s[i] == "{" || s[i] == "}");
        c1++;

       }
    }


};

module.exports = { isValid };


