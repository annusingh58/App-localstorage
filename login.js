// Step 1  : Get user typed data from html to JS = Completed
// Step 2 : Get all users data into JS from LS = Completed
// Step 3 : Iterate all users (LS) with user typed data 
// Step 4 : If email & password both match at same time then
//  show user suceess


// Get user typed data from html to JS = Completed


function login(event) {

    event.preventDefault();

    // alert("login function called");

    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    console.log(email, password, "checkdata")


    var LS = JSON.parse(localStorage.getItem("users"))
    console.log(LS, "ls here")


    var flag = false;
    for (var i = 0; i < LS.length; i++) {
        console.log(LS[i])
         
        if (LS[i].email==email && LS[i].password==password){
            flag=true;
        }
        
    }
    if(flag==true){

        alert("login successful")
    }
    else{
        alert(" user data not match")
    }
    


}