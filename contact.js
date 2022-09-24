function clearErrors(){

    errors = document.getElementsByClassName('error');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;
}
function validate(){
    var ret = true;
    clearErrors();
    var name = document.forms['MyForm']['fname'].value;
    if (name.length<4){
        seterror("name","*name is too short")
        ret=false;
    }
    if (name.length==0){
        seterror("name","*name is mandetory")
        ret=false;
    }
    var email = document.forms['MyForm']['femail'].value;
    if (email.length>50){
        seterror("email","*email too long")
        ret=false;
    }
    if (email.length==0){
        seterror("email","*email is mandetory")
        ret=false;
    }
    var phone = document.forms['MyForm']['fphone'].value;
    if (phone.length!=10){
        seterror("phone","*enter valid number")
        ret=false;
    }
    return ret;
}