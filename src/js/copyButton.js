document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', () => {
    const wrapper = button.closest('code');
    const line = wrapper?.querySelector('.line');

    if (!line) {
      console.error('No .line element found inside <pre>.');
      return;
    }

    const codeText = line.innerText;

    navigator.clipboard.writeText(codeText).then(() => {
      button.innerText = 'Copied!';
      setTimeout(() => {
        button.innerText = 'Copy';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
});
