let leftArrow = document.getElementById('list__left')
let rightArrow = document.getElementById('list__right')

let marginLeft = 0;
let products = document.querySelector('.products-container')
let product = 1;

leftArrow.onclick = function() {
  if (product > 1) {
    product--;
    marginLeft += 169;
    products.style.marginLeft = marginLeft + 'px';
  }
}

rightArrow.onclick = function() {
  if (product < 4) {
    product++;
    marginLeft -= 169;
    products.style.marginLeft = marginLeft + 'px';
  }
}

setInterval(() => {
  if (innerWidth > 768) {
    products.style.margin = 0;
    product = 0;
  }
}, 100)