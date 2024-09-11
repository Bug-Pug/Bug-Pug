document.addEventListener('DOMContentLoaded', () => { 
        const dropdownButtons = document.querySelectorAll('.JBdropdown-btn');

        dropdownButtons.forEach(button => {
        button.addEventListener('click', () => { 
            const parentItem = button.parentElement; 
            parentItem.classList.toggle('active'); 
        }); 
    }); 
});    