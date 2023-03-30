let submitbutton = document.getElementById("submitbutton");

let error ={};

submitbutton.addEventListener("click",function(e){
    e.preventDefault();
    let signupform = document.forms["signupform"];
    let firstnameinput = signupform.firstname;
    let lastnameinput = signupform.lastname;
    let emailnameinput = signupform.email;
    let passwordnameinput = signupform.password;

    if(firstnameinput.value == ""){
        error.firstname = " Field should not be empty."
}
    if(lastnameinput.value ==""){
        error.lastname = "Field should not be empty."
    }
    console.log(errors);
    
    for(let error in errors){

    }










    // if(emailnameinput.value ==""){
    //     let emailnamegroup = document.getElementById('emailnamegroup');
    //     let emailnamemessage = document.querySelector("#emailnamegroup .message");
    //     emailnamegroup.classList.add("error");
    //     emailnamemessage.textContent = "Field should not be empty.";

    // }
    // if(passwordnameinput.value ==""){
    //     let passwordnamegroup = document.getElementById('passwordnamegroup');
    //     let passwordnamemessage = document.querySelector("#passwordnamegroup .message");
    //     passwordnamegroup.classList.add("error");
    //     passwordnamemessage.textContent = "Field should not be empty.";

    // }
});
