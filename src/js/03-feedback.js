import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');

getMessageFromLocalStorage();

formFeedback.addEventListener('input', throttle(feedbackMessage, 500));
formFeedback.addEventListener('submit', sendForm);

const formData = {};

function feedbackMessage(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function sendForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}

function getMessageFromLocalStorage() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parsedSavedMessage = JSON.parse(savedMessage);
  const formEmail = formFeedback[0];
  const formMessage = formFeedback[1];

  if (parsedSavedMessage) {
    formEmail.value = parsedSavedMessage.email || '';
    formMessage.value = parsedSavedMessage.message || '';
  }
}
