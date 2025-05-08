export function setupCopyButtons() {
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
      const codeElement = button.nextElementSibling;
      const line = codeElement?.querySelector('.line');

      if (!line) {
        console.error('No .line element found.');
        return;
      }

      const codeText = line.innerText.trim();

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
}
