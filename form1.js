function formdetails(event) {
    event.preventDefault();

    var username = document.getElementById("userName").value;
    var useremail = document.getElementById("userEmail").value;
    var userpassword = document.getElementById("userPassword").value;
    var userconfimpassword = document.getElementById("userConfirmPassword").value;
    var usernumber = document.getElementById("userNumber").value;

    var userdata = { UserName: username, userEmail: useremail, userPassword: userpassword, userConfimpassword: userconfimpassword, userMobilenumber: usernumber };
    var array = JSON.parse(localStorage.getItem("users")) || [] //araay  for checking user available or not in this line. array is only variable u can take anything name and [] define array..dont confuse

    var flag = false;


    for (var i = 0; i < array.length; i++) {
        // console.log(array[i].userEmail);
        // console.log(useremail,"enter your email")

        if (array[i].userEmail == useremail) {
            flag = true;
        }

    }
    if (flag == true) {
        alert("email matched");


    }
    else {
        array.push(userdata)               // push use for .... push the array...../array is only variable name here
        localStorage.setItem("users", JSON.stringify(array))   //for multiple user we will use array object ko string me convert krne k liye jsonstringify use krte h

        alert("registeration done successfully");
    }












    if (username && useremail && userpassword && userconfimpassword && usernumber) {
        if (userpassword == userconfimpassword) {
            if (userpassword.length >= 8 && userconfimpassword.length >= 8 && usernumber.length == 10) {
                var array = JSON.parse(localStorage.getItem("users")) || []    //araay  for checking user available or not
                var flag = false;
                for (var i = 0; i < array.length; i++) {
                    // console.log(array[i].userEmail);
                    // console.log(useremail,"enter your email")
                    if (array[i].userEmail == useremail) {
                        flag = true;
                    }

                }
                if (flag == true) {
                    alert("email matched");
                }
                else {
                    alert("registeration done successfully");
                    var userdata = { UserName: username, userEmail: useremail, userPassword: userpassword, userConfimpassword: userconfimpassword, userMobilenumber: usernumber };
                    array.push(userdata)               // push use for .... push the array.....
                    localStorage.setItem("users", JSON.stringify(array))   //for multiple user we will use array 
                    document.getElementById("userName").value = ""
                    document.getElementById("userEmail").value = ""
                    document.getElementById("userPassword").value = ""
                    document.getElementById("userConfirmPassword").value = ""
                    document.getElementById("userNumber").value = ""
                }
            }
                //                 if( usernumber==10){
                //                    var userdata = {UserName : username, userEmail:useremail , userPassword:userpassword ,userConfimpassword:userconfimpassword ,userMobilenumber:usernumber };
                //                    localStorage.setItem("users", JSON.stringify(userdata));
                //                 }
                                // else{
                                //     console.log("mobile number not 10 digit");
                                // }
                            else{
                                console.log("Either you passsword is not containing 8 character Or your is not 10 digit..");
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
                // function getData(){
        

            //