const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){

    console.log("please write a number");
    
    } else{
    
    console.log("Thank you for writing your age.");
    console.log("your age is " + age);
};