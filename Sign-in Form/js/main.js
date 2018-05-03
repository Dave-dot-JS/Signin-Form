// Default DOM elements
const signInForm = document.getElementById('modal');
const signInButton = document.getElementById('signin');
const hello = document.getElementById('hello');

// Sign-in form
const closeButton = document.getElementById('close');
const submitButton = document.getElementById('submit');
const forms = document.querySelectorAll('.field');
const formContainer = document.getElementById('getstarted')

// Username and Password
let username;
let password;

// User information
let users = {
	dave: {
		password: "HeyYouPikachu"
	},
    betty: {
		password: "CharmanderIsCuter"
	}
};

// Change data structure to remove "username' requirement but keep nested object 'Key' thingamegir


// Functions handling form submission
function formValidation() {
	let valid = [];
	// First make sure nothing is blank
	forms.forEach(form => {
		if (form.value.trim() == '') {
			form.classList.add('error');
			form.addEventListener('focus', () => form.classList.remove('error'));
		} else {
			valid.push(true);
		}
	});

	// If both fields are filled in, check the information
	if (valid[0] == true && valid[1] == true) {
		username = forms[0].value;
		password = forms[1].value;
		checkUserSubmission(username);
	}
}


function checkUserSubmission(user) {
	// Check if username is password is correct
	if (password === users[user.toLowerCase()].password) {
		closeForm();
		hello.innerHTML += `, ${username} <i class="fa fa-paw"></i>.`;
		setTimeout( () => {
			window.addEventListener('click', () => location.reload());
		} , 0);
	} else {
		formContainer.style.transform = 'translateX(10px)';
		setTimeout( () => formContainer.style.transform = 'translateX(5px)', 25);
		setTimeout( () => formContainer.style.transform = 'translateX(-5px)', 50);
		setTimeout( () => formContainer.style.transform = 'translateX(5px)', 75);
		setTimeout( () => formContainer.style.transform = 'translateX(-5px)', 100);
		setTimeout( () => formContainer.style.transform = 'translateX(0)', 125);
	}
}


// Functions handing form animations
function openForm() {
	signInForm.style.display = 'block';
	setTimeout( () => signInForm.style.opacity = 1, 0);
}

function closeForm() {
	signInForm.style.opacity = 0;
	setTimeout( () => {
		signInForm.style.display = 'none';
		forms.forEach(form => form.value = null);
		forms.forEach(form => form.classList.remove('error'));
		}
	, 300);
}

// Event Listeners
signInButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
submitButton.addEventListener('click', formValidation);

