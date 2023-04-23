// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  function calculateAll() {
    const products = document.querySelectorAll('.product');
    let total = 0;
    products.forEach(product => {
      total += updateSubtotal(product);
    });
    document.querySelector('#total-value span').innerText = total.toFixed(2);
  }
  
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  console.log('The target in remove is:', target);
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
