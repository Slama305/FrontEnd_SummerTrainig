var childWin;
function openChild()
{
    childWin=window.open("newWin.html");
}

function closeChild()
{
    if(childWin && !childWin.closed)
    {
      childWin.close();
    }
}

function OpenCloseChild()
{
openChild();
setTimeout(closeChild,5000);
}
 