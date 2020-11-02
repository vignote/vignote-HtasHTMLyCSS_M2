import { checkEmail, checkPhone } from './module.js';

const form = document.getElementById('Contact');
const email = document.getElementById('Email');
const phone = document.getElementById('Phone');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let error = false;
  if (!checkEmail(email.value)) {
    alert('El Email introducido no es correcto');
    email.style.borderColor = 'red';
    error = true;
  } else {
    email.style.borderColor = 'black';
  }

  if (!checkPhone(phone.value)) {
    alert(
      `El Teléfono introducido '${phone.value}' no es correcto.\nFormatos correctos:\n\t +NN-NNN-NNN-NNN\n\t+NN NNN NNN NNN\n\t\tNNN-NNN-NNN\n\t\tNNN NNN NNN`
    );
    phone.style.borderColor = 'red';
    error = true;
  } else {
    phone.style.borderColor = 'black';
  }
  if (!error) alert('Los Datos introducidos son correctos');
});
