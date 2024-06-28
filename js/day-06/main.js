

let a = parseFloat(prompt("Enter a number 1"));
let b = parseFloat(prompt("Enter a number 2"));
let opt = prompt("Enter +,-,*,/");

switch(opt){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        console.log(a/b);
        break;
    default:
        console.log("only +,-,*,/ used");

}

