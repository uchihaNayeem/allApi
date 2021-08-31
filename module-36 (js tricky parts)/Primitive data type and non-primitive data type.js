/* 
Data types
primitive data types
1. number
2. string
3. boolean
4. undefined
5. null
7. symbol
non-primitive
6. object
*/

/* 

    1. akhane let 'a' declare er time new slot/memory nise 
       same vabe let 'b' declare er time new slot/memory nise 
    2. 'b' er okhane just a er value set korsi. 
        alada memory neyar karone 'a' er man change hoise 'b' er man change hoynai

*/



let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello';
// console.log(a, b);

/* 
    akta object create korar por abar sheta new var er moddhe rakhle shera new mwmory ney na
    2. new var er moddhe rakhle MAIN onj. ke just point kore dey
    3. ajonno dui tar e man change hoy
*/
const x = { job: 'web developer' }
const y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x, y);