
  let shopping = document.getElementsByClassName("shoppingcontainer");
  for (let shopping = 0; i < shopping.length; i++) {

    let total = shopping[1].getElementsByClassName(".total");

    let tt = parseInt(total.textContent);
    let unite = shopping[0].querySelectorAll(".unit-price");
    let untt = parseInt(unite.textContent);
    let quantity = shopping[0].querySelectorAll("quantity");
    let qtt = parseInt(quantity.textContent);
    let btnplus = shopping[0].querySelectorAll(".fa-plus-circle");
    let btnmoin = shopping[0].querySelectorAll("fas fa-minus-circle");
    let coeur = shopping[0].querySelectorAll(".fas fa-heart");
    let supp = shopping[0].querySelectorAll('.fa-trash-alt');

    console.log(shopping);

    console.log(qtt);

    btnplus.addEventListener("click", () => {
      qtt++;
      console.log("qtt", qtt);

      quantity.textContent = qtt;
      console.log(qtt);
    });



    btnmoin.addEventListener("click", () => {
      if (qtt <= 0) {
        return qtt;
      }
      qtt--;

      quantity.textContent = qtt;
      console.log(qtt);
    });
    let supr = quantity;
    if (supr) {

      supp.addEventListener("click", function () {
        supr.remove();
      });
    }

    console.log(supp);

    coeur.addEventListener("click", function () {
      if (coeur.style.color === "red") {
        coeur.style.color = "black";
      } else {
        coeur.style.color = "red";
      }
      console.log(coeur);
    });





  }
