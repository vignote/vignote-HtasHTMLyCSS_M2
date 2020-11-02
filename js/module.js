export let color = 'green';

export function add(n1, n2) {
  return n1 + n2;
}

// Returns True if Display is smaller than 600px
function smallDisplay() {
  return window.innerWidth < 600;
}

// Insert contextual-menu if display is small
function loadSubmenuForSmallDisplay() {
  const contextual_menu = document.getElementById('contextual-menu');
  if (smallDisplay()) {
    const category = document.getElementById('up_category');
    category.innerHTML += contextual_menu.innerHTML;
  } else {
    const title = contextual_menu.getAttribute('title');
    contextual_menu.innerHTML = `<h3>${title}</h3>` + contextual_menu.innerHTML;
  }
}

//Check Email Function
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return typeof email == 'string' && email.length > 0 && re.test(email);
}

//Check Phone Number Function
function checkPhone(phone) {
  const re = /^(\+[0-9]{2}[- ])?[0-9]{3}[- ][0-9]{3}[- ][0-9]{3}$/;
  return re.test(phone);
}

export { loadSubmenuForSmallDisplay, checkEmail, checkPhone };
