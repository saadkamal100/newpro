function validate() {

	var input_text = document.querySelector("#input_text");
	var input_password = document.querySelector("#input_password");
	var error_msg = document.querySelector(".error_msg");

	if(input_text.value.length <= 3 || input_password.value.length <= 3 ){
		error_msg.style.display = "inline-block";
		input_text.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
	}
	else{
		return true;
	}
	var username = document.getElementsByid("username").value;
	var password = document.getElementsByid("password").value;
	if (username=="admin"&& password=="user") {
		alert("login Succesfully");
		return false;
	}
 else
 {
 	alert("login failed")
 }


}