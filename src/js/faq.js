/**
 * Setup click event listeners for FAQ section items.
 *
 * The function adds click event listeners for all elements with class `faq-item`.
 * When an item is clicked, the function toggles the visibility of the `.answer-text`
 * element inside the item and changes the background color of the item and the
 * arrow icon.
 */
export function setupFAQsItems() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const questionText = this.querySelector('.question-text');
            const answerText = this.querySelector('.answer-text');
            const arrowIcon = this.querySelector('img');

            // Переключение видимости ответа
            if (answerText.style.display === 'flex') {
                answerText.style.display = 'none';
                questionText.style.color = '#EFECE6';
                this.style.backgroundColor = '';
                arrowIcon.src = 'img/arrow-green-btn.svg';
            } else {
                answerText.style.display = 'flex';
                questionText.style.color = '#080808';
                this.style.color = '#080808';
                this.style.backgroundColor = '#EFECE6'; // Пример фона при открытии
                arrowIcon.src = 'img/arrow-forward-green-btn.svg';
            }
        });
    });
}


