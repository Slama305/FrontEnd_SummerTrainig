function validation(e)
{
    var nameEmp = document.getElementById("name");
    var emailEmp = document.getElementById("email");
    
    if(nameEmp.value ==="" || !isNaN(nameEmp.value))
    {
        e.preventDefault();
        alert("Name Is Required Please");
         return false;
    }

    if(emailEmp.value ===" " )
    {
        e.preventDefault();
        alert("Email Is Requierd Please");
        return false;
    }
    
    else if (!/\S+@\S+\.\S+/.test(emailEmp.value))
     {
        e.preventDefault();
        alert("Invalid email format.");
        return false;
    }

    return true;
}
    
    


    



