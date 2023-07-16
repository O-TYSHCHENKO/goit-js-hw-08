import throttle from 'lodash.throttle';
const localStKey = 'feedback-form-state';
const formSelect = document.querySelector('.feedback-form');
let formValuesSt = {};
function onFormInput(e) {
  formValuesSt[e.target.name] = e.target.value;
  localStorage.setItem(localStKey, JSON.stringify(formValuesSt));
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Please, insert all informations!');
  }

  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  formValuesSt = {};
  localStorage.removeItem(localStKey);
}
function oldDataOnForm() {
  const oldInputVAlues = localStorage.getItem(localStKey);
  if (oldInputVAlues) {
    formValuesSt = JSON.parse(oldInputVAlues);
    for (key in formValuesSt) {
      formSelect[key].value = formValuesSt[key];
    }
  }
}
oldDataOnForm();
formSelect.addEventListener('input', throttle(onFormInput), 500);
formSelect.addEventListener('submit', onFormSubmit);
