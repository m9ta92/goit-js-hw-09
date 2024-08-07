const feedbackFormEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', function () {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    document.querySelector('[name="email"]').value = savedFormData.email;
    document.querySelector('[name="message"]').value = savedFormData.message;
  }
});

const onFormFieldInput = function (e) {
  const { name, value } = e.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = function (e) {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    document.querySelector('[name="email"]').value = '';
    document.querySelector('[name="message"]').value = '';
  }
};

feedbackFormEl.addEventListener('change', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
