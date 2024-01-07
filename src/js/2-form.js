const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveFormDataToStorage);
form.addEventListener('submit', handleSubmit);

function getFormData() {
  return {
    email: form.querySelector('[name="email"]').value.trim(),
    message: form.querySelector('[name="message"]').value.trim(),
  };
}

function saveFormDataToStorage() {
  const formData = getFormData();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormDataFromStorage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    fillInForm('email', savedData.email);
    fillInForm('message', savedData.message);
  }
}

function fillInForm(fieldName, savedValue) {
  const formField = form.querySelector(`[name="${fieldName}"]`);

  if (savedValue !== undefined) {
    formField.value = savedValue;
  } else {
    formField.value = '';
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = getFormData();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}

loadFormDataFromStorage();
