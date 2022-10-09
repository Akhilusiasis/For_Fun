const febo = document.querySelector('#febo');
const pale = document.querySelector('#pale');
const facto = document.querySelector('#fac');
const pass = document.querySelector('#pass');

pass.addEventListener('click', pass_Genereator);
febo.addEventListener('click', febo_Generator);
pale.addEventListener('click', pale_Generator);
facto.addEventListener('click',factorial_Of);



function pass_Genereator(){
var password = [];
var randomLength = Math.floor(Math.random() * (11-8)) + 8;
const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*{}[]"
for(let i=0; i < randomLength; i++){
    password.push(charSet.charAt(Math.floor(Math.random()*charSet.length-1)));
}
console.log("The random password with length ",randomLength," is: ",password.join(''));
}


function factorial_Of(){
var num = parseInt(prompt("Factorial of "));
ans = 1;
for (let i = 1; i <= num; i++) {
    ans = ans*i;
}
console.log("factorial of ",num," is:",ans);
}


function febo_Generator(){
    var febo_seq = [0,1];
    var check = true;
    var num = prompt("Generating febonacci up to?");
    while(check){
    if(febo_seq[febo_seq.length - 1] <= num){
        febo_seq.push(febo_seq[febo_seq.length - 1] + febo_seq[febo_seq.length -2]);
    }
    else{
        febo_seq.pop();
        check = false;
    }  
    }
    console.log("Febonacci:",febo_seq.toString());
}


function pale_Generator(){
    var pale_seq= [] , i = 0;
    var len = prompt("Display the first ____ palendrom series");
    var checker = true;
    while(checker){
        if(pale_seq.length <= len){
            if(is_palindrome(i)){
                pale_seq.push(i);
                
            }
            i++;        
        }
        else{
            checker = false;
        }
    }
    
    console.log("Palendrome: ",pale_seq.toString());
}


function is_palindrome(i){
    var reversed = 0, remainder, original;
    var num =  parseInt(i);
    original = num;
    while(num > 0){
        remainder = parseInt(num%10);
        reversed = (reversed*10)+remainder;
        num = parseInt(num/10);
    }
    
    if(original == reversed){
        // alert("It is palendrome");
        return true;
    }
    else{
        // alert("It is not palendrome");
        return false;
    }
}
