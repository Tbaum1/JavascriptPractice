//Here is a comment
/* multi line
   comments
*/
console.log("Hello Javascript");
//value or data types
console.log("Hello from javascript");
console.log("Lets do some math");
console.log(4 + 7);
console.log(12 / 0);
console.log('Goodbye!');
let a = 3.14;
console.log(a);
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1,temp2,temp3);
//temp3 = 5;
//Increment a number variable
let c = 0;
c += 1;
c++;
console.log(c); //shows 2
let num1 =0;
{
    num1 = 1;
    const num2 = 0;
   console.log(num2);
}
//console.log(num2);
//template literal
const country = "France";
console.log(`I live in ${country}`);
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);
//observe the following outputs
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" * 2;
console.log(g);
//explicit conversion Number() or String()
const h = "5";
console.log(h + 1); //concatention: show the string "51"
const i = Number(h);
console.log(i + 1); //Numerical addition: show the number 6
const j = 6;
console.log("5" + String(j));
console.log(Number("dog"));
//Strict equality with ===
let str = 0;
let num = '0';
console.log(num === num); //true
console.log(str === str); //true
console.log(num === str); //false
console.log(num == str); //true
//switch
const p = "abc";
switch(p) {
    case "abc":
        console.log("p = abc");
        //break;
    case "def":
        console.log("p = def");
        break;
    default:
        console.log("otherwise");
}