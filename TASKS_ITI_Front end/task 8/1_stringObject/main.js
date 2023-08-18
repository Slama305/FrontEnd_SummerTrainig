// name 
var flag=true;
while(flag){
    var namee = prompt("enter your name ");
    if (!isFinite(namee)){alert("welcome " + namee ),flag=false}
    else {alert("Try again !");}
}
// phone number 
flag=true;
while(flag){
    var phone = prompt("enter your number phone ");
    if(!isNaN(phone)&&phone[0]=="0" &&phone[1]=="1" )alert( phone ),flag=false;
    else alert("Try again !");
}
flag=true;
var tstemail= /^\w+([\.-]?\w+)*@\w+([\.-]?\W+)*(\.\w{2,3})+$/;
while(flag){
    var email = prompt("enter your email ");
    if(tstemail.test(email) )alert( email ),flag=false;
    else alert("Try again !");
}