function typeText() {
  const elements = document.querySelectorAll('.typedText');
  elements.forEach((element) => {
    const letters = element.innerText.match(/[\w\W]/gi);
    let typedText = '';
    const initialDelay = element.getAttribute('data-initial-delay');
    const speed = element.getAttribute('data-speed');
    const isTitle = typeof element.getAttribute('data-title') === 'string';

    const animatedClass = isTitle ? 'typedTitleLetter' : 'typedLetter';

    let delay = initialDelay ? +initialDelay : 860;
    const increment_delay = speed ? +speed : 30;
    letters.forEach((letter) => {
      typedText += `<span class='${animatedClass}' style='animation-delay: ${delay}ms'>${letter}</span>`;
      delay += increment_delay;
    });
    element.innerHTML = typedText;
  });
}

typeText();
