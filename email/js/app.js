
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailform = document.getElementById('email-form');

eventListeners();

function eventListeners() {

    // App Init
    document.addEventListener('DOMContentLoaded', appInit);

    // validate form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    //
    resetBtn.addEventListener('click', resetForm);
}



//
function appInit() {
    sendBtn.disabled = true;
}
function validateField() {
    let error;

    // validate the
    validateLenght(this);

    // Validate email
    if(this.type === 'email'){
        validateEmail(this);
    }

    // Both errors
    error = document.querySelectorAll('.error');

    // Check
    if (email.value !== '' && subject.value !== '' && message.value !== ''){
        if(error.length === 0){
            sendBtn.disabled = false;
        }
    }
}

// Validate the lenght
function validateLenght(field) {
    if (field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
// validate email
function validateEmail(field) {
    let emailText = field.value;
    if (emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
function resetForm() {
    sendEmailform.reset();
}
