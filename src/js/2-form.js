const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveFormDataToStorage);

function saveFormDataToStorage() {
  const formData = {
    email: form.querySelector('[name="email"]').value.trim(),
    message: form.querySelector('[name="message"]').value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormDataFromStorage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  fillInForm('email', savedData.email);
  fillInForm('message', savedData.textarea);
}

function fillInForm(fieldName, savedValue) {
  const formField = form.querySelector(`[name="${fieldName}"]`);

  if (savedValue) {
    formField.value = savedValue;
  }
}

loadFormDataFromStorage();

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
