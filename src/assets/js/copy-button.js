export function setupCopyButtons() {
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
      const codeElement = button.closest('.code-block')?.querySelector('code');

      if (!codeElement) {
        console.error('Code element not found.');
        button.innerText = 'Error';
        setTimeout(() => button.innerText = 'Copy', 2000);
        return;
      }

      const codeText = codeElement.innerText.trim();

      navigator.clipboard.writeText(codeText).then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        button.innerText = 'Error';
        setTimeout(() => button.innerText = 'Copy', 2000);
      });
    });
  });
}
