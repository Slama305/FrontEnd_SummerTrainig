function rectangle(width,height)
{
this.width=width;
this.height=height;
}

rectangle.prototype.area=function()
{
    return this.width*this.height;
};


rectangle.prototype.perimeter=function()
{
    return 2*(this.width+this.height);
};

var rectangle=new rectangle(12,6);
console.log("width: ",rectangle.width);
console.log("Height: ",rectangle.height);
console.log("Area: ",rectangle.area());
console.log("perimeter: ",rectangle.perimeter());