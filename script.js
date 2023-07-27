const stringChecker = function(s, p1, p2) {
   let p1Pointer = 0;
   let p2Pointer = 0;
 
   for (let i = 0; i < s.length; i++) {
     const currentChar = s[i];
     const p1Char = p1[p1Pointer];
     const p2Char = p2[p2Pointer];
 
     if (currentChar === p1Char) {
       p1Pointer++;
     } else if (currentChar === p2Char) {
       p2Pointer++;
     } else {
       return false;
     }
   }
 
   if (p1Pointer !== p1.length || p2Pointer !== p2.length) {
     return false;
   }
 
   return true;
 };
 
 console.log(stringChecker('rad', 'ra', 'd'));

 

 