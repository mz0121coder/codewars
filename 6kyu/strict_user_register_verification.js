/*
Solemn declaration:
This Kata is purely fictitious and any similarity is just coincidence ;-)

Story
With your help (in the last Kata), John start building his new web site c0dewars.com.

This time you need to help John write a strict user registration authentication function, the function name is isValid. Function accept 1 parameter user, it is an object that contains three items:username password and email. like this:

{username:"myjinxin",password:"12349876",email:"myjinxin@hotmail.com"}
The Validation rules:
The username length range: 4-15 characters; It can use letters, numbers and underline; It should not be the same as the registered username, The registered user data is included in a predefined array userdata, each element in the array is an object that contains the username, password, and email(all letters are lowercase); These reserved names can not be registered: administrator, admin, system, john; It should ignore the case, myjinxin and MYJINXIN are the same username;

If the username is invalid, you need to return the following information:

"Error: username is too short."
"Error: username is too long"
"Error: username contains invalid characters."
"Error: username has been registered by other users."
"Error: username has been reserved by system."
You should check the error points in the order of the above to make sure that the correct error message is returned.

The password length range: 6-15 characters; It can use letters and numbers; It can't be a weak password: 1) Increasing characters. such as 123456 abcdef; 2) Consisting of one or two repeating characters. such as 111111 aaaaaa 010101 ababab; 3) Username and password can not be the same.

If the password is invalid, you need to return the following information:

"Error: password is too short."
"Error: password is too long"
"Error: password contains invalid characters."
"Error: password is a weak password."
You should check the error points in the order of the above to make sure that the correct error message is returned.

The email has no limit with length; It can use letters, numbers and _.@; Its format must be aaa@bbb.ccc; system only accept email address from these website: hotmail.com facebook.com gmail.com 163.com 126.com, email address from other websites are invalid.

If the email is invalid, you need to return the following information:

"Error: email address contains invalid characters."
"Error: email address format is invalid."
"Error: email address is not allowed."
You should check the error points in the order of the above to make sure that the correct error message is returned.

Finally, if there is no error in the registration information, you should return "User registration success!" and add the user information to the end of the array userdata. The name of next user will not be the same as this username.

Some examples:
isValid({username:"smi",password:"1234",email:"1@2.3")
should return "Error: username is too short."

isValid({username:"hellomynameisjohn",password:"1234",email:"1@2.3")
should return "Error: username is too long"

isValid({username:"*john*",password:"1234",email:"1@2.3")
should return "Error: username contains invalid characters."

isValid({username:"smile67",password:"1234",email:"1@2.3")  //it's exist in userdata
should return "Error: username has been registered by other users."  

isValid({username:"admin",password:"1234",email:"1@2.3")
should return "Error: username has been reserved by system."

isValid({username:"smile78",password:"1234",email:"1@2.3")
should return "Error: password is too short."

isValid({username:"smile78",password:"1111111111111111",email:"1@2.3")
should return "Error: password is too long"

isValid({username:"smile78",password:"@1234@",email:"1@2.3")
should return "Error: password contains invalid characters."

isValid({username:"smile78",password:"121212",email:"1@2.3")
should return "Error: password is a weak password."

isValid({username:"smile78",password:"20160526",email:"mymail!@2.3")
should return "Error: email address contains invalid characters."

isValid({username:"smile78",password:"20160526",email:"mymail.hotmail.com")
should return "Error: email address format is invalid."

isValid({username:"smile78",password:"20160526",email:"mymail.hotmail@com")
should return "Error: email address format is invalid."

isValid({username:"smile78",password:"20160526",email:"mymailhotmail@com")
should return "Error: email address format is invalid."

isValid({username:"smile78",password:"20160526",email:"mymail@hotmailcom")
should return "Error: email address format is invalid."

isValid({username:"smile78",password:"20160526",email:"mymail@htmail.com")
should return "Error: email address is not allowed."

isValid({username:"smile78",password:"20160526",email:"mymail@hotmail.com")
should return "User registration success!"

again: isValid({username:"smile78",password:"20160526",email:"mymail@hotmail.com")
should return "Error: username has been registered by other users." 
*/

function isValid(user) {
	const { username, password, email } = user;
	const duplicateUsername = userdata.find(
		user => user.username.toUpperCase() === username.toUpperCase()
	);
	switch (true) {
		// validate username
		case username.length < 4:
			return 'Error: username is too short.';
		case username.length > 15:
			return 'Error: username is too long.';
		case /[^a-z_0-9]/i.test(username):
			return 'Error: username contains invalid characters.';
		case duplicateUsername !== undefined:
			return 'Error: username has been registered by other users.';
		case /^(administrator|admin|system|john)$/i.test(username):
			return 'Error: username has been reserved by system.';
		// validate password
		case password.length < 6:
			return 'Error: password is too short.';
		case password.length > 15:
			return 'Error: password is too long.';
		case /[^a-z0-9]/i.test(password):
			return 'Error: password contains invalid characters.';
		case '123456789'.includes(password):
		case 'abcdefghijklmnopqrstuvwxyz'.includes(password.toLowerCase()):
		case [...new Set(password)].length < 3:
		case password === username:
			return 'Error: password is a weak password.';
		// validate email
		case /[^a-z0-9_\.@]/i.test(email):
			return 'Error: email address contains invalid characters.';
		case !/^[a-z0-9_]+@[a-z0-9_]+\.com$/i.test(email):
			return 'Error: email address format is invalid.';
		case !/(hotmail|facebook|gmail|163|126)\.com$/.test(email):
			return 'Error: email address is not allowed.';
	}
	// successful registration
	userdata.push(user);
	return 'User registration success!';
}
