const STORAGE_KEY = 'feedback-form-state';
const STORAGE_KEY_EMAIL = 'feedback-email-state';
const STORAGE_KEY_MESSAGE = 'feedback-message-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);
email.addEventListener('input', onEmailInput);

fillInTextarea();
fillInEmail();

function onFormSubmit(event) {
  event.preventDefault();

  const inputEmail = localStorage.getItem(STORAGE_KEY_EMAIL);
  const inputMsg = localStorage.getItem(STORAGE_KEY_MESSAGE);

  if (inputEmail && inputMsg) {
    localStorage.removeItem(STORAGE_KEY_EMAIL);
    localStorage.removeItem(STORAGE_KEY_MESSAGE);
    event.currentTarget.reset();
  } else {
    alert('Please fill in all fields!');
  }
}

function onTextareaInput(event) {
  const message = event.currentTarget.value.trim();

  localStorage.setItem(STORAGE_KEY_MESSAGE, message);
}

function onEmailInput(event) {
  const userEmail = event.currentTarget.value.trim();

  localStorage.setItem(STORAGE_KEY_EMAIL, userEmail);
}

function fillInTextarea() {
  const savedMsg = localStorage.getItem(STORAGE_KEY_MESSAGE);

  if (savedMsg) {
    textarea.value = savedMsg;
  }
}

function fillInEmail() {
  const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL);

  if (savedEmail) {
    email.value = savedEmail;
  }
}
