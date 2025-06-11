document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const totalPriceElement = document.querySelector('.total-price');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Close all other boxes and remove active class
            boxes.forEach(b => {
                if (b !== box) {
                    b.classList.remove('active');
                }
            });

            // Toggle the clicked box
            box.classList.toggle('active');

            // Update the total price based on the selected box
            const price = box.getAttribute('data-price');
            totalPriceElement.textContent = `TOTAL: $${price} USD`;
        });
    });
});