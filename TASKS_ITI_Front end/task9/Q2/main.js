var arr=[];
for(var i=0 ;i<3 ;i++){
    var num =prompt("Enter number ");
    arr.push(Number(num));
}
    add=arr[0]+arr[1]+arr[2];
    mul=arr[0]*arr[1]*arr[2];
    div=arr[0]/arr[1]/arr[2];
document.write(`<h2>sum of 3 value ${arr[0]}+${arr[1]}+${arr[2]} = ${add}<\h2>`);
document.write(`<h2>multiplication of 3 value ${arr[0]}*${arr[1]}*${arr[2]} = ${mul}<\h2>`);
document.write(`<h2>divsion of 3 value ${arr[0]}/${arr[1]}/${arr[2]} = ${div}<\h2>`);