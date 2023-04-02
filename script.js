let submitbutton = document.getElementById("submitbutton");

let errors ={};

submitbutton.addEventListener("click",function(e)
{
    e.preventDefault();
    errors = {};
    let signupform = document.forms["signupform"];
    let firstnameinput = signupform.firstname;
    let lastnameinput = signupform.lastname;
    let emailnameinput = signupform.email;
    let passwordnameinput = signupform.password;

    if(firstnameinput.value == "")
    {
        errors.firstname = " Field should not be empty."
    }
    if(lastnameinput.value =="")
    {
        errors.lastname = "Field should not be empty."
    }
     if(emailnameinput.value =="")
     {
         errors.emailname = "Field should not be empty."
     }
     if(passwordnameinput.value =="")
     {
         errors.passwordname = "Field should not be empty."
     }
     if(passwordnameinput.value.length <= 5)
     {
        errors.passwordname = "Minimum 6 character"
     }

    console.log(errors);
    
    for(let error in errors)
    {
        let lastnamegroup = document.getElementById(`${error}group`);
        let lastnamemessage = document.querySelector(`#${error}group .message`);
        lastnamegroup.classList.add("error");
        lastnamemessage.textContent = errors[error]; 
    }
    for(let error in errors)
    {
     let emailnamegroup = document.getElementById(`${error}group`);
     let emailnamemessage = document.querySelector(`#${error}group .message`);
        emailnamegroup.classList.add("error");
      emailnamemessage.textContent = errors[error];
    }
    for(let error in errors)
    {
     let passwordnamegroup = document.getElementById(`${error}group`);
     let passwordnamemessage = document.querySelector(`#${error}group .message`);
        passwordnamegroup.classList.add("error");
      passwordnamemessage.textContent = errors[error];
    }
    if(Object.keys(errors).length == 0)
    {
        signupform.submit();
    }

});
