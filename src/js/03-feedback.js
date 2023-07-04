import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

const saveFormState = () => {
  try {
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  } catch (error) {
    console.error('Failed to save form state:', error);
  }
};

const restoreFormState = () => {
  try {
    const savedState = localStorage.getItem('feedback-form-state');

    if (savedState) {
      const formState = JSON.parse(savedState);
      emailInput.value = formState.email;
      messageInput.value = formState.message;
    }
  } catch (error) {
    console.error('Failed to restore form state:', error);
  }
};

const handleSubmit = event => {
  event.preventDefault();

  const email = emailInput.value;
  const message = messageInput.value;

  if (email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  try {
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';

    console.log({ email, message });
  } catch (error) {
    console.error('Failed to handle form submission:', error);
  }
};

form.addEventListener('input', throttle(saveFormState, 500));
window.addEventListener('load', restoreFormState);
form.addEventListener('submit', handleSubmit);
