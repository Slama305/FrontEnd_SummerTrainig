var check=true;
while(check){
    var name1 =prompt("Enter Your Name ?");
    if(!isFinite(name1))document.write("Welcome " + name1 ), check=false ;
    else alert("pleass try agien");
} 