let form = document.querySelector('.form');
let inputs = document.querySelectorAll('.text-field__input');
let inputEmail = document.querySelector('.input-email');
let inputPhone = document.querySelector('.input-phone');
let textInput = document.querySelector('.text-field__textarea');
let checkbox = document.querySelector('.check__input');
let button = document.querySelector('.button');
let checkboxLabel = document.querySelector('.check')

function validateEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
	let re = /^[0-9\s]*$/;

	return re.test(String(phone));
}

form.onsubmit = function () {
	let emailValue = inputEmail.value;
	let phoneValue = inputPhone.value;

	let emptyInputs = Array.from(inputs).filter(input => input.value === '')

	inputs.forEach((input) => {
		if(input.classList.contains('req') && input.value === '') {
			input.classList.add('error')
		} else {
			input.classList.remove('error')
		}
	})

	if(!validateEmail(emailValue)) {
		console.log('invalid email')
		inputEmail.classList.add('error')
		return false;
	} else {
		inputEmail.classList.remove('error')
	}

	if(!validatePhone(phoneValue)) {
		console.log('invalid phone')
		inputPhone.classList.add('error')
		return false;
	} else {
		inputPhone.classList.remove('error')
	}

	if(!checkbox.checked) {
		console.log('checkbox is required')
		checkboxLabel.classList.add('error')
		return false
	} else {
		checkboxLabel.classList.remove('error')
	}

	if(emptyInputs.length !== 0) {
		console.log('inputs not filled');
		return false;
	}

}