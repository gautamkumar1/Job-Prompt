

// document.addEventListener('DOMContentLoaded', function () {
//   const backButton = document.getElementById('back-button');
// //   backButton.addEventListener('click', function () {
// //     goBack();
// //   });

//   function goBack() {
//     window.location.href = 'popup.html';
//   }

 
// });

document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('back-button');
    if (backButton) {
      backButton.addEventListener('click', function () {
        goBack();
      });
    }
  
    function goBack() {
      window.location.href = 'popup.html';
    }
  });



    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy to Clipboard';
            card.appendChild(copyButton);
        });

        // Add event listener to handle the copy action
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('copy-button')) {
                copyContent(event.target);
            }
        });

        // Copy content to clipboard
        function copyContent(button) {
            const card = button.closest('.card');
            const content = card.querySelector('.copy-content').textContent;

            const tempInput = document.createElement('textarea');
            tempInput.value = content;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Provide visual feedback on the button
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy to Clipboard';
            }, 2000); // Reset button text after 2 seconds
        }
    });
