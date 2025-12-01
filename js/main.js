// Funcionalidad para FAQ (ayuda.html)
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = this.querySelector('.faq-toggle');
            const isOpen = faqItem.classList.contains('active');
            
            // Cerrar todos los demás items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Toggle del item actual
            if (isOpen) {
                faqItem.classList.remove('active');
                answer.style.maxHeight = null;
                toggle.textContent = '+';
            } else {
                faqItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                toggle.textContent = '−';
            }
        });
    });
});


