theme_reset = 0
function theme(){
	theme_reset = theme_reset + 1
	if (theme_reset==1){
		document.getElementById("theme").innerHTML = "<link rel=stylesheet href='Sign up style2.css'>"
		
	}
		
	else if (theme_reset==2){
		document.getElementById("theme").innerHTML = "<link rel=stylesheet href='Sign up style.css'>"	
		theme_reset=0
	}
}

reset=0
function password(){
	let password_store = document.getElementById("password").value;
	document.getElementById("password_see").innerHTML = '<input class="input_box" type="password" for="password" id="password" name="password" minlength="8" placeholder="Ex. Password123" pattern="^\\D\\w*\\d$" oninvalid="setCustomValidity('+"'Must start with a letter and end with a number (Minimum 8 characters)'"+')" oninput="this.setCustomValidity('+"''"+')" value="" required>'
	
	reset = reset + 1
	if (reset==1){
		document.getElementById("password_button").innerHTML = "See Password 🙉"
		document.getElementById("password_see").innerHTML = '<input class="input_box" type="text" for="password" id="password" name="password" minlength="8" placeholder="Ex. Password123" pattern="^\\D\\w*\\d$" oninvalid="setCustomValidity('+"'Must start with a letter and end with a number (Minimum 8 characters)'"+')" oninput="this.setCustomValidity('+"''"+')" value="'+password_store+'" required>'	
	}
	
	else if (reset==2){
		reset=0
		document.getElementById("password_button").innerHTML = "See Password 🙈"
		document.getElementById("password_see").innerHTML = '<input class="input_box" type="password" for="password" id="password" name="password" minlength="8" placeholder="Ex. Password123" pattern="^\\D\\w*\\d$" oninvalid="setCustomValidity('+"'Must start with a letter and end with a number (Minimum 8 characters)'"+')" oninput="this.setCustomValidity('+"''"+')" value="'+password_store+'" required>'
	}
}