function formdetails(event){
    event.preventDefault();
     
    var username = document.getElementById("userName").value ;
    var useremail = document.getElementById("userEmail").value;
    var userpassword = document.getElementById("userPassword").value;
    var userconfimpassword = document.getElementById("userConfirmPassword").value;
    var usernumber = document.getElementById("userNumber").value;

    if(username && useremail && userpassword && userconfimpassword && usernumber ){ 
         
        if(userpassword == userconfimpassword){
            if(userpassword.length >=8 && userconfimpassword.length >=8){

                if( usernumber==10){
                   var userdata = {UserName : username, userEmail:useremail , userPassword:userpassword ,userConfimpassword:userconfimpassword ,userMobilenumber:usernumber };
                   localStorage.setItem("users", JSON.stringify(userdata));


                }
                else{
                    console.log("mobile number not 10 digit");
                }
           
            }
            else{
                console.log("minimum 8 character");
            }
           
        }


        else{
            console.log ("password not match");
        }
       
        
 }
 else{
    console.log("all field are required");
}








}