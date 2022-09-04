import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');

const infoMessage = {};

getMessageFromLocalStorage()

formFeedback.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(infoMessage)
  
  localStorage.removeItem('feedback-form-state');
  const formData = new FormData(formFeedback);
  formData.forEach((value, name) =>(value, name))
});

formFeedback.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  infoMessage[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(infoMessage));
}

function getMessageFromLocalStorage() {
  let savedInfo = localStorage.getItem('feedback-form-state');
  
  if (savedInfo) {
    savedInfo = JSON.parse(savedInfo);
    Object.entries(savedInfo).forEach(([name,value]) => {
      infoMessage[name] = value; 
      
      formFeedback.elements[name].value = value;
    });
  }
}


