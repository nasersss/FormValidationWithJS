
    const form = document.getElementById('form');
    
form.addEventListener('submit', e => {
	e.preventDefault();
	
	validate();
});
function validate()

{
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const url = document.getElementById('url').value;
    const message= document.getElementById('message').value;
           
// name validation

if(name == "")
            {
            alert("enter the name");
            return false;
            }
            
if(!isNaN(name))
            {
            alert("name should be in character");
            return false;
            }


// email validation

var at = email.indexOf("@");
var dot = email.lastIndexOf(".");

if(at<1||dot<at+2||dot+2 >= email.lenght)
            {
            alert("Not a valid email");
            return false;
            }

// passowd validation 
if(password == "")
            {
            alert("enter the password");
            return false;
            }
            if (password.length < 6) {
               alert ("password must be greater than 6 characters");
                return false;
            }
           
            if (password.search(/[a-z]/) < 0) {
                alert("password must contain lowercase letter."); 
                return false;
            }
            if (password.search(/[A-Z]/) < 0) {
                alert("password must contain uppercase  letter."); 
                return false;
            }
        
            if (password.search(/[0-9]/) < 0) {
                alert(" password must contain  digit.");
                return false;
            }
           if (password.search(/[!@#\$%\^&\*_]/) < 0) {
                alert(" password must contain  symbolfrom -[ ! @ # $ % ^ & * _ ]"); 
                return false;
            }

// confirm pw validation
if(password2 == "")
            {
             alert("confirm your password");
            return false;
            }
if(password !== password2){
    alert('password not same');
    return false;
}
//  age validation
if(age == "")
            {
             alert("enter your age");
            return false;
            }
if(isNaN(age))
            {
            alert("age. should be in digit.");
            return false;
            }
if( age<18)
          {
            alert(" your age must be greater than 18 .");
            return false;
            }

//phone no. validation
var start777 = phone.indexOf("777");
if(start777!=0){
    alert("phon must be start with777");
    return false;
}
if(phone == "")
            {
             alert("enter phone no.");
            return false;
            }
if(isNaN(phone))
            {
            alert("phone no. should be in digit.");
            return false;
            }
if( phone.length != 9)
          {
            alert("must be 9 digit no.");
            return false;
            }

//url validation
if(url=="")
    {
       alert("enter url.");
       return false;
       } 
       
       function isValidUrl(url) {
        const match = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
        return match.test(url);
      }

    if(!(isValidUrl(url))){
        alert("incorrct url.");
        return false;
    }

//message validation
if(message=="")
    {
        alert("enter message.");
        return false;
    }

if(message.length <20)
    {
    alert(" message must be greater than 20 charecter.");
    return false;
    }

 alert ("success");
} 

