 function my_levenshtein(str1 , str2){
    var diff = 0;
    if (str1.length != str2.length){
        return -1;
    }
    for (i = 0 ; i < str1.length; i ++){
        if(str1[i] != str2[i]){
             diff += 1;
        }; 
        }; 
 return diff;
};
 // console.log(my_levenshtein("" , ""))
