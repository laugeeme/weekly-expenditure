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

  printMsj(msj, type) {
    const divMsj = document.createElement('div');
    divMsj.classList.add('text-center', 'alert');
    if (type === 'error') {
      divMsj.classList.add('alert-danger');
    } else {
      divMsj.classList.add('alert-success');
    }
    divMsj.appendChild(document.createTextNode(msj));
    document.querySelector('.primario').insertBefore(divMsj, form);

    setTimeout(function () {
      document.querySelector('.primario').remove;
      form.reset();
    }, 3000);
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
  const expenditureQuantity = document.querySelector('#cantidad').value;

  const ui = new Interface();

  if (expenditureName === '' || expenditureQuantity === '') {
    ui.printMsj('Hubo un error', 'error');
  } else {
    ui.printMsj('Gasto añadido', 'correcto');
  }
});
