const data = [
    {
        img : '../Assets/image1.png',
        name : 'Plain',
        price : 40,
    },
    {
        img : '../Assets/image2.png',
        name : 'Paper Roast',
        price : 65,
    },
    {
        img : '../Assets/image3.png',
        name : 'Onion Roast',
        price : 80,
    },
    {
        img : '../Assets/image4.png',
        name : 'Egg Parotta',
        price : 55,
    },
    {
        img : '../Assets/image5.png',
        name : 'Plain Omelette',
        price : 25,
    },
    {
        img : '../Assets/image6.png',
        name : 'Chicken Fry',
        price : 150,
    },
    {
        img : '../Assets/image7.png',
        name : 'Egg Veechu',
        price : 65,
    },
    {
        img : '../Assets/image8.png',
        name : 'Egg Roast',
        price : 65,
    },
];

const body = document.getElementsByTagName('body')[0];
const cart_icon = document.getElementById('cart_icon');
const cart_bill = document.getElementById('cart_bill');
const close_cart_button = document.getElementById('close_cart_button');
const items_in_cart = document.querySelector('nav a:last-child span');
const place_order = document.querySelector('#cart_bill > div:nth-child(4) > button');


// cart_bill.style.display = 'none';
// cart_bill.style.width = '450px';
// cart_bill.style.background = 'white';
// cart_bill.style.color = 'black';
// cart_bill.style.position = 'fixed';
// cart_bill.style.top = '0';
// cart_bill.style.right = '0';
// cart_bill.style.bottom = '0';
// cart_bill.style.overflowY = 'scroll';

const cartName = cart_bill.children.item(0).children.item(0);
const foodDiv1 = cart_bill.children.item(1);
const totalFoodCost = cart_bill.children.item(2);


const food1Button = document.getElementsByClassName('move')[0];
const food2Button = document.getElementsByClassName('move')[1];
const food3Button = document.getElementsByClassName('move')[2];
const food4Button = document.getElementsByClassName('move')[3];
const food5Button = document.getElementsByClassName('move')[4];
const food6Button = document.getElementsByClassName('move')[5];
const food7Button = document.getElementsByClassName('move')[6];
const food8Button = document.getElementsByClassName('move')[7];


cartName.style.fontSize = '30px';
cartName.style.fontWeight = '500';

place_order.style.background = 'black';
place_order.style.color = 'white';
place_order.style.fontSize = '20px';
place_order.style.padding = '10px';
place_order.style.borderRadius = '5px';


let show = true;
cart_icon.addEventListener('click', (e) => {
    const ele = e.target;
    if(show){
        ele.children.item(0).style.display = 'block';
        show = false;
    } else {
        ele.children.item(0).style.display = 'none';
        show = true;
    }
});


close_cart_button.addEventListener('click', (e) => {
    cart_bill.style.display = 'none';
    show = true;
});


let inTheCart = [];
let totalPrice = 0;
let totalItemsInCart = 0;

food1Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[0].name))) {
        addToCart(data[0].img, data[0].name, data[0].price);
        inTheCart.push(data[0].name);
    }
    else alert(item + ' already in the cart.');
})

food2Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[1].name))) {
        addToCart(data[1].img, data[1].name, data[1].price);
        inTheCart.push(data[1].name);
    }
    else alert(item + ' already in the cart.');
})

food3Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[2].name))) {
        addToCart(data[2].img, data[2].name, data[2].price);
        inTheCart.push(data[2].name);
    }
    else alert(item + ' already in the cart.');
})

food4Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[3].name))) {
        addToCart(data[3].img, data[3].name, data[3].price);
        inTheCart.push(data[3].name);
    }
    else alert(item + ' already in the cart.');
})

food5Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[4].name))) {
        addToCart(data[4].img, data[4].name, data[4].price);
        inTheCart.push(data[4].name);
    }
    else alert(item + ' already in the cart.');
})

food6Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[5].name))) {
        addToCart(data[5].img, data[5].name, data[5].price);
        inTheCart.push(data[5].name);
    }
    else alert(item + ' already in the cart.');
})

food7Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[6].name))) {
        addToCart(data[6].img, data[6].name, data[6].price);
        inTheCart.push(data[6].name);
    }
    else alert(item + ' already in the cart.');
})

food8Button.addEventListener('click', (e) => {
    const item = e.target.parentElement.previousElementSibling.children.item(0).innerHTML;
    if(!(inTheCart.includes(data[7].name))) {
        addToCart(data[7].img, data[7].name, data[7].price);
        inTheCart.push(data[7].name);
    }
    else alert(item + ' already in the cart.');
})





function addToCart(imgPath, food, price){

    totalItemsInCart++;
    items_in_cart.innerHTML = `${totalItemsInCart}`;
    if(totalItemsInCart > 0) items_in_cart.style.display = 'block';
    

    const newDiv = document.createElement('div');
    foodDiv1.appendChild(newDiv);

    const imgDiv = document.createElement('div');
    newDiv.appendChild(imgDiv);

    const img = document.createElement('img');
    imgDiv.appendChild(img);
    img.setAttribute('src', imgPath);

    const detailDiv = document.createElement('div');
    newDiv.appendChild(detailDiv);

    const foodName = document.createElement('p');
    detailDiv.appendChild(foodName);

    foodName.innerHTML = food;
    foodName.style.fontSize = '18px';
    foodName.style.fontWeight = '600';
    foodName.style.textTransform = 'uppercase';
    foodName.style.color = 'orangered';
    foodName.style.wordSpacing = '2px';


    const foodPrice = document.createElement('p');
    detailDiv.appendChild(foodPrice);

    foodPrice.innerHTML = 'Rs. ' + price;
    foodPrice.style.fontSize = '18px';
    foodPrice.style.fontWeight = '500';
    foodPrice.style.textTransform = 'capitalize';


    const foodCount = document.createElement('input');

    foodCount.setAttribute('type', 'number');
    foodCount.setAttribute('min', '1');
    foodCount.setAttribute('value', '1');
    foodCount.style.height = '25px';
    foodCount.style.fontSize = '18px';

    detailDiv.appendChild(foodCount);


    const totalDiv = document.createElement('div');
    newDiv.appendChild(totalDiv);

    totalDiv.innerHTML = 'Rs. ' + (price * +foodCount.value);
    totalDiv.style.fontSize = '18px';
    totalDiv.style.fontWeight = '600';
    totalDiv.style.textTransform = 'capitalize';


    const removeDiv = document.createElement('div');
    newDiv.appendChild(removeDiv);

    removeDiv.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    removeDiv.style.color = 'orangered';
    

    totalPrice += +foodCount.value * price;
    totalFoodCost.innerHTML = 'Total = Rs.' + totalPrice;

    let oldCount = +foodCount.value;
    
    foodCount.addEventListener('change', () => {
        if(foodCount.value <= 0) {
            foodCount.value = 0;
            oldCount = +foodCount.value;
            totalPrice = 0;
            totalDiv.innerHTML = 'Rs. ' + (price * +foodCount.value);
            totalFoodCost.innerHTML = 'Total = Rs.' + totalPrice;
        } else {
            let currentCount = +foodCount.value;
            if(oldCount < currentCount) {
                totalPrice += price;
                oldCount = currentCount;
            }
            else {
                totalPrice -= price;
                oldCount--;
            }
            totalDiv.innerHTML = 'Rs. ' + (price * +foodCount.value);
            totalFoodCost.innerHTML = 'Total = Rs.' + totalPrice;

        }
    })

    removeDiv.addEventListener('click', () => {
        if(confirm('Are You Sure You Want to Remove this Item.')) {
            totalItemsInCart--;
            items_in_cart.innerHTML = `${totalItemsInCart}`;
            if(totalItemsInCart == 0) items_in_cart.style.display = 'none';
            newDiv.remove();
            totalPrice -= price * foodCount.value;
            totalFoodCost.innerHTML = 'Total = Rs.' + totalPrice;
            inTheCart.splice(inTheCart.indexOf(food), 1);
        }
    })

}