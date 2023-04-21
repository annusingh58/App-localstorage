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
    // console.log(email, password, "checkdata")


    var LS = JSON.parse(localStorage.getItem("users"));
    // console.log(LS, "ls here")

    var currentUser;
     var flag = false;
    for (var i = 0; i < LS.length; i++) {
        console.log(LS[i]);
         
        if (LS[i].userEmail==email && LS[i].userPassword==password){
            flag=true;
            currentUser=LS[i];
    
        
    }
    if(flag==true){
        console.log(currentUser,"currentUser")
        localStorage.setItem("currentUser",JSON.stringify(currentUser))
        window.location.href="./home.html";
        alert("login successful")
    }
    else{
        alert("credential not match")
    }
    


    }
 }
//  step 1 -once we got match credentail,save that user as currenrUser in Ls;
//  step 2 -now save this cuurentuser into LS.
//  step 3 redirect user to hoomepage