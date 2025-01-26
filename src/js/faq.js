/**
 * Setup click event listeners for FAQ section items.
 *
 * The function adds click event listener for the parent element of all elements
 * with class `faq-item`. When an item is clicked, the function toggles the
 * visibility of the `.answer-text` element inside the item and changes the
 * background color of the item and the arrow icon.
 */
export function setupFAQsItems() {
    const faqContainer = document.querySelector('.faq-container');
    faqContainer.addEventListener('click', function (event) {
        const faqItem = event.target.closest('.faq-item');
        if (faqItem) {
            toggleAnswerVisibility(faqItem);
        }
    });
}


/**
 * Toggle the visibility of the answer text and change the color scheme of the
 * item element and the arrow icon.
 *
 * If the answer text is visible, the function hides it, changes the text color
 * of the question text to a light gray, sets the background color of the item
 * to transparent, and replaces the arrow icon with a green arrow pointing to
 * the right.
 *
 * If the answer text is hidden, the function shows it, changes the text color
 * of the question text to black, sets the background color of the item to a
 * light gray, and replaces the arrow icon with a green arrow pointing to the
 * bottom.
 *
 * @param {HTMLElement} faqItem The parent element of the item element.
 */
function toggleAnswerVisibility(faqItem) {
    const questionText = faqItem.querySelector('.question-text');
    const answerText = faqItem.querySelector('.answer-text');
    const arrowIcon = faqItem.querySelector('img');
    // Toggling answer visibility.
    if (answerText.style.display === 'flex') {
        answerText.style.display = 'none';
        questionText.style.color = '#EFECE6';
        faqItem.style.backgroundColor = '';
        arrowIcon.src = 'img/arrow-green-btn.svg';
    } else {
        answerText.style.display = 'flex';
        questionText.style.color = '#080808';
        faqItem.style.color = '#080808';
        faqItem.style.backgroundColor = '#EFECE6';
        arrowIcon.src = 'img/arrow-forward-green-btn.svg';
    }
}
