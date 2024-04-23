document.addEventListener('DOMContentLoaded', (event) => {
    let total = 0;
    const totalPriceElement = document.querySelector('.total');
    const cards = document.querySelectorAll('.card-body');
  
    

    cards.forEach((card) => {
        let quantity = 0;
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.trim().slice(0, -2));
        const quantityElement = card.querySelector('.quantity');

        card.querySelector('.fa-plus-circle').addEventListener('click', () => {
            quantity++;
            total += unitPrice;
            quantityElement.textContent = quantity;
            totalPriceElement.textContent = total + '$';
        });

        card.querySelector('.fa-minus-circle').addEventListener('click', () => {
            if (quantity > 0) {
                quantity--;
                total -= unitPrice;
                quantityElement.textContent = quantity;
                totalPriceElement.textContent = total + '$';
            }
        });

        card.querySelector('.fa-trash-alt').addEventListener('click', () => {
            total -= unitPrice * quantity;
            quantity = 0;
            quantityElement.textContent = quantity;
            totalPriceElement.textContent = total + '$';
        });
        
    });

    let coeurs = document.querySelectorAll('.fa-heart');
    coeurs.forEach((coeur) => {
      coeur.addEventListener('click', () => {
        if (coeur.style.color === 'red') {
          coeur.style.color = 'black';
        } else {
          coeur.style.color = 'red';
        }
        console.log(coeur);
      });
    });
});
