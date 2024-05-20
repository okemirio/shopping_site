const display_products = document.querySelector('.products');
const cancel = document.querySelector('.cancel');
const sidebar = document.querySelector('.sidebar');
const cart_button = document.querySelector('#cart_logo');
const cart_items = document.querySelector('.cart_items');
const total_cost = document.getElementById('total_cost');



const product = [
           {
            product_id: 1,
            product_name: 'addidas polo',
            product_price: '$100',
            product_img: 'img/product1.jpg',
        },
        {
            product_id: 2,
            product_name: 'HOODED PARIKA',
            product_price: "$1000",
            product_img: 'img/product3.jpg',
        },
        {
            product_id: 3,
            product_name: 'WATER BOTTLE',
            product_price: '$100',
            product_img: 'img/product4.jpg',

        },
        {
            product_id: 4,
            product_name: 'Gucci glasses',
            product_price: '$1200',
            product_img: 'img/product5.jpg',

        },
        {
            product_id: 5,
            product_name: 'Addidas cap',
            product_price: '$600',
            product_img: 'img/product6.jpg',

        },
        {
            product_id: 6,
            product_name: 'Addidas bag',
            product_price: '$700',
            product_img: 'img/product7.jpg',

        },
        {
            product_id: 7,
            product_name: 'Wireless Earpod',
            product_price: '$900',
            product_img: 'img/product2.jpg',
        },
        {
            product_id: 8,
            product_name: 'Geld Shoe',
            product_price: '$900',
            product_img: 'img/product8.jpg',
        },

    
];

const carts = [];

cancel.addEventListener('click', function () {
    sidebar.classList.add('hide');
});

cart_button.addEventListener('click', function () {
    sidebar.classList.remove('hide');
    
});


display_products.addEventListener('click', function(event){
    const addToCart = event.target.id;
    if (addToCart === 'cart_icon1' ) {
        const product_id = parseInt(event.target.getAttribute('data-id'));
        let selectedItem = null;
        for (let index = 0; index < product.length; index++) {
            if (product[index].product_id === product_id) {
                selectedItem = product[index];
                carts.push(selectedItem); // Add selected item to the cart
                displayCarts(); // Update the cart display
                calculateTotal(); // Recalculate total cost
                break; // Exit loop once item is found
            }
        }
    }
});

function displayproducts() {
    for (let index = 0; index < product.length; index++) {
        const { product_img, product_name, product_price, product_id } = product[index];

        display_products.innerHTML += `    <div class="product">
        <div class="product_image">
            <img src="${product_img}" alt="" />
        </div>
        <div class="product_name">${product_name}</div>
        <div class="product_price">
            <h5>${product_price}</h5>
            <i class="bx bxs-shopping-bag" data-id='${product_id}' id="cart_icon1"></i>
        </div>
        </div>`
    }
}
displayproducts();

function displayCarts() {
    cart_items.innerHTML = ''; // Clear existing cart items
    for (let index = 0; index < carts.length; index++) {
        const { product_img, product_name, product_price } = carts[index];
        cart_items.innerHTML += `
        <div class="cart_item">
            <div class="cart_img">
                <img src="${product_img}" alt="">
            </div>
            <div class="cart_action">
                <div class="cart_item_name">${product_name}</div>
                <div class="cart_item_price">${product_price}</div>
                <input type="text" value="1" id="cart_value" disabled>
            </div>
            <div class="cart_trash">
                <button type="button" style="background-color: red">Delete</button>
            </div>
        </div>`;
    }
}

function calculateTotal() {
    let totalCost = 0;
    for (let index = 0; index < carts.length; index++) {
        totalCost += parseFloat(carts[index].product_price.replace('$', '')); // Remove $ sign and sum up prices
    }
    // Display the total cost
    total_cost.innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}
