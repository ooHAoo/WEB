
/***** By: Huda Al Dallal        *****
 ***** Student Number: 130268162 *****/

/*****************************************************************  
 Notes:
 
-> Used to display 'X' when error occurs
  <img src="error.png" width="12" height="12" alt=""/>   
  ****************************************************************/



var numm = true; //for validPhone
var passCheck = true; //for password check
var rPassCheck = true; //for reetype password check
var fNameCheck = true; //for first name
var lNameCheck = true; //for last name

function validateForm(signup) {

   if(validPhone(numm) && validStatus(signup) && validPass(passCheck) && validRPass(rPassCheck) && validFName(fNameCheck) && validLName(lNameCheck)){
       return true;
   }else{
       return false;
   }
}



function nameValid(str) {
	var check = false;
	var letter = false;
	for (var i = 0; i < str.length; i++) {
		if (str[i] >= 'A' && str[i] <= 'Z') { 
			letter = true; 
		}
		
		if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z') || str[i] == '\'' || str[i] == '-') { 
			check = true; 
		}else{
			check = false;
			break;
		}
	}
	return (check == true && letter == true);
}




//PASSWORD VALIDATION

function validPass() {
	var pass = document.signup.pass.value.trim();
	var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

	//console.log(pass);
	if(pass.length == 0) {
		document.querySelector("#passError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> Password cannot be empty';
		passCheck = false;

	} else if (pass.length < 8) {
		document.querySelector("#passError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> Password must be at least 8 characters long';
		passCheck = false;

	}else if(!pass.match(pattern)){
		document.querySelector("#passError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> Password must contain both upper and lower case characters, and at least 1 number';
			passCheck = false;

	}else{
		document.querySelector("#passError").innerHTML = "";
			passCheck = true;
	}
	return passCheck;
}
	

// RETYPE NAMPASSWORD VALIDATION

function validRPass() {
	var pass = document.signup.rPass.value.trim();
	if (pass.lenght == 0) {
		document.querySelector("#rPassError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> The password cannot be empty';
		rPassCheck = false;
	} else if (!(pass == document.signup.pass.value.trim())) {
		document.querySelector("#rPassError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> The passwords must match';
		rPassCheck = false;
	}else{
		document.querySelector("#rPassError").innerHTML = "";
		rPassCheck = true;
	}
	return rPassCheck;
}


// FIRST NAME VALIDATION 	

function validFName() {
	var name = document.signup.fName.value.trim();
	
	if(name.length == 0){
		document.querySelector("#fNameError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> First Name cannot be empty';
		fNameCheck = false;
	} else if (!nameValid(name)) {
		document.querySelector("#fNameError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> First Name must have at least 1 alphabetic character and must consist only of a-Z, \' or - characters';
		fNameCheck = false;
	}else{
		document.querySelector("#fNameError").innerHTML = "";
		fNameCheck = true;
	}
	return fNameCheck;
}
	

	
// LAST NAME VALIDATION

function validLName() {
	var name = document.signup.lName.value.trim();
	if (name.length == 0) {
		document.querySelector("#lNameError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> Last Name cannot be empty';
		lNameCheck = false;
	} else if (!nameValid(name)) {
		document.querySelector("#lNameError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> Last Name must have at least 1 alphabetic character and must consist only of a-Z, \' or - characters';
		lNameCheck = false;
	}else{
		document.querySelector("#lNameError").innerHTML = "";
		lNameCheck = true;
	}
	return lNameCheck;
}




// VALIDATE PHONE NUMBER

function validPhone() {
	var input = document.signup.phone.value.trim();
	var pattern = /^\d{3}-\d{3}-\d{4}$/; //validation for the format

	if (input.length == 0) {
		document.querySelector("#phoneError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> Phone number cannot be empty';
		numm = false; 
	}else if (!input.match(pattern)) {
		document.querySelector("#phoneError").innerHTML= '<img src="error.png" width="12" height="12" alt=""/> Phone number must be in 999-999-9999 format';
		numm =  false; 
	} else if (input[0] == '0' && input[1] == '0' && input[2] == '0' && input[4] == '0' && input[5] == '0' && input[6] == '0' && input[8] == '0' && input[9] == '0' && input[10] == '0' && input[11] == '0') {
		document.querySelector("#phoneError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> The phone number cannot be all zeroes';
		numm =  false; 
	} else if (input[0] == '0' && input[1] == '0' && input[2] == '0') {
		document.querySelector("#phoneError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> The area code of phone number 999-999-9999 can\'t be all zeros';
		numm =  false; 
	  } else {
		  document.querySelector("#phoneError").innerHTML = "";
		numm = true;
	}
	return numm;
}



	
// EDUCATION VALIDATION

function validStatus() {
	var statusNum = document.signup.status.length;
	var check = false;

	for (var i = 0; i < statusNum; i++) {
		if (document.signup.status[i].checked == true) { 
			check = true; 
		}
	}
	if (check == false) {
		signup.querySelector("#statusError").innerHTML = '<img src="error.png" width="12" height="12" alt=""/> Must select one of the options';
		return false;
	}else{
		signup.querySelector("#statusError").innerHTML = "";
		return true;
	}
}
