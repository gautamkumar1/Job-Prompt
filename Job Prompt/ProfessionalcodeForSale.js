document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container');

    const prompts = [
        // Define your prompts here as objects
        {
            title: 'Sales Strategies',
            content: 'Implement strategies and provide step-by-step instructions...'
        },
        {
            title: 'Develop a sales pitch',
            content: 'Develop a sales pitch for [business] for a new product or service...'
        },
        // ... add more prompts
    ];

    prompts.forEach(prompt => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${prompt.title}</h2>
            <p class="copy-content">${prompt.content}</p>
            <button class="copy-button">Copy to Clipboard</button>
        `;

        cardsContainer.appendChild(card);
    });

    cardsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('copy-button')) {
            copyContent(event.target);
        }
    });

    function copyContent(button) {
        const card = button.closest('.card');
        const content = card.querySelector('.copy-content').textContent;

        const tempInput = document.createElement('textarea');
        tempInput.value = content;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy to Clipboard';
        }, 2000);
    }
});