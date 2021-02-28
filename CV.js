// CONTACT FORM

const [form] = document.forms;
const characterCount = document.querySelector('#characterCount');
const [emailFeedback, phoneFeedback, messageFeedback] = document.querySelectorAll('.feedback');
const MAX_CHARACTERS = 200;

const isEmailValid = email => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email);
}

const isPhoneValid = phone => {
  return /[0-9]/.test(phone);
}

const isMessageValid = message => {
  return (
    !!message &&
    message.length <= MAX_CHARACTERS &&
    /^[A-Za-z0-9_ ]*$/g.test(message)
  );
}

const validation = (email, message, phone) => {
  return isEmailValid(email) && isMessageValid(message) && isPhoneValid(phone);
}

const getElement = (name, e) => {
  return {
      phone(e) {
      e.target.classList.toggle('border-danger', !isPhoneValid(e.target.value));
      phoneFeedback.textContent = isPhoneValid(e.target.value) ? null : 'Provide a valid phone number';
    },
    email(e) {
      e.target.classList.toggle('border-danger', !isEmailValid(e.target.value));
      emailFeedback.textContent = isEmailValid(e.target.value) ? null : 'Provide a valid email address';
    },
    message(e) {
      e.target.classList.toggle('border-danger', !isMessageValid(e.target.value));
      messageFeedback.textContent = isMessageValid(e.target.value) ? null : `Message must between 1 to ${MAX_CHARACTERS} characters long and contain only alphabet, number, underscore and white space`;

      characterCount.classList.toggle('text-danger', !e.target.value || e.target.value.length > MAX_CHARACTERS);
      characterCount.textContent = `${e.target.value.length}/${MAX_CHARACTERS}`;
    }
  }[name](e);
}

const handleInput = e => {
  const { email, message, btn, phone} = form;
  const { name } = e.target;
  
  getElement(name, e);

}

const init = () => {
  characterCount.textContent = `0/${MAX_CHARACTERS}`;
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  
  form.email.addEventListener('input', handleInput);
  form.phone.addEventListener('input', handleInput);
  form.message.addEventListener('input', handleInput);
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    const { email, message,phone } = e.target;
    const submittedValue = {
      email: email.value,
      phone: phone.value,
      message: message.value
    };
    
    // Check console to see the result
    console.log(submittedValue);
  })
});