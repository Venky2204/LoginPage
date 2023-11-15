var getId = (id)=>{
    return document.getElementById(id);
}
var getClasses = (classes)=>{
    return document.getElementsByClassName(classes);
}

var firstName = getId('firstname'),
lastName = getId('lastname'),
email = getId('email'),
password = getId('password'),
form = getId('myform'),
button = getId('btn'),
errMsg = getClasses('error');
sts = getId('sts');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    var fNameValid = customValidator(firstName,0,"First Name is mandatory");
    var lNameValid = customValidator(lastName,1,"Last Name is mandatory");
    var emailValid = customValidator(email,2,"Email is mandatory");
    var passwordValid = customValidator(password,3,"Password is mandatory");

    if(fNameValid == true && lNameValid == true && emailValid == true && passwordValid == true){
            var data = {};
            data['FirstName'] = firstName.value;
            data['LastName'] = lastName.value;
            data['PAssword'] = password.value;
            data['Email'] = email.value;
            localStorage.setItem('userinfo',JSON.stringify(data));
            // console.log(JSON.parse(localStorage.getItem(userinfo)));
            sts.textContent = "Form getting submitting, Please wait....";
            setTimeout(()=>{
                sts.textContent = "Form Successfully submitted";
            },3000);
            return;
    }else{
        sts.textContent = '';
    }
})

function customValidator(documentRef, classId, errorMessage){

    if(documentRef.value.trim() == ''){
        documentRef.style.border = '1px solid red';
        errMsg[classId].textContent = errorMessage;
        return false;
    }else{
        documentRef.style.border = '2px solid green';
        errMsg[classId].textContent = '';
        return true;
    }
}