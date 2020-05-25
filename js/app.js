'use strict';

const userBudget = prompt('¿Cual es tu presupuesto semanal?');
const form = document.getElementById('agregar-gasto');
let budgetQuantity;

class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.remaining = Number(budget);
  }
  //subtract the current budget
  remainingBudget(quantity = 0) {
    return (this.remaining -= Number(quantity));
  }
}

class Interface {
  //manage the HTML
  writeBudget(quantity) {
    const budgetSpan = document.querySelector('span#total');
    const remainingSpan = document.querySelector('span#restante');

    budgetSpan.innerHTML = `${quantity}`;
    remainingSpan.innerHTML = `${quantity}`;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (userBudget === null || userBudget === '') {
    window.location.reload();
  } else {
    budgetQuantity = new Budget(userBudget); //Define our burdget

    const ui = new Interface();
    ui.writeBudget(budgetQuantity.budget);
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //read expenditure form
  const expenditureName = document.querySelector('#gasto').value;
  const expenditureQuantity =document.querySelector('#cantidad').value;
});
