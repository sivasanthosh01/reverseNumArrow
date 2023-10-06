let num=parseInt(prompt("Enter the Value"));
document.write(`The given value is ${num} <br><br>`)
let reverse=(n)=>{
    let a=0,b;
    while(n>0){
        b=n%10;
        n=parseInt(n/10);
        a=a*10+b;
    }
    return a;
}
let ans=reverse(num);
document.write(`The Reverse number is ${ans}`)