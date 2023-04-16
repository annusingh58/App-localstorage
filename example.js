function formInfo(event){
    event.preventDefault();

    var username = document.getElementById("userName").value;

    var email = document.getElementById("userEmail").value;

    var password = document.getElementById("userPassword").value;

    var confirmPassword = document.getElementById("userConfirmPassword").value;


    if(username && email && password && confirmPassword){
        if(password.length >= 8 && confirmPassword.length >= 8){
            if(password == confirmPassword){
                var userData = {UserName : username, UserEmail : email, UserPassword : password, UserConfirm : confirmPassword};
                
                localStorage.setItem("users", JSON.stringify(userData));
            }
            else{
                console.log("passwords are not equal");
            }
        }
        else{
            console.log("Minimum 8 characters required");
        }
    }
    else{
        console.log("All fields are mandatory");
    }

}

function getData(){
    
}