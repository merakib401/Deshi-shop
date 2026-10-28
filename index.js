function getElement(id) {
   const element = document.getElementById(id);
   return element;
}

const cartBtns = document.getElementsByClassName("cart-btn");
for (const cartBtn of cartBtns) {
    cartBtn.addEventListener("click", function () {
        // console.log("clicked")

        const prtoductImg = cartBtn.parentNode.parentNode.parentNode.children[0].children[0].src;
        const productTitle = cartBtn.parentNode.parentNode.parentNode.children[1].children[1].innerText;
        const productPrice = cartBtn.parentNode.parentNode.parentNode.children[1].children[2].innerText;
        // console.log(prtoductImg, productTitle, productPrice);

        const totalPriceElement = getElement("total-price");
        const totalPriceText = totalPriceElement.innerText;
        const totalPrice = parseFloat(totalPriceText);
        const newTotalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
        totalPriceElement.innerText = newTotalPrice;
        // console.log(newTotalPrice);

        // const totalQuantityElement = getElement("total-quantity");
        // const totalQuantityText = totalQuantityElement.innerText;
        // const totalQuantity = parseInt(totalQuantityText);
        // const newTotalQuantity = totalQuantity + 1;
        // totalQuantityElement.innerText = newTotalQuantity;
        // console.log(newTotalQuantity);

        const newCart = document.createElement("div");
        newCart.innerHTML = `
        <div class="flex justify-between items-center bg-gray-300 p-4 rounded-xl">
                 <img src="${prtoductImg}" alt="" class="w-10 " />
                 <div>
                  <h2 class="text-md font-bold">${productTitle}</h2>
                  <p>${productPrice} TK</p>
             </div>
            </div>
        
        `;
        const cartContainer = getElement("cart-container");
        cartContainer.appendChild(newCart)
                 
        const quantity = getElement("total-quantity").innerText;
        // console.log(quantity);
        const newQuantity = Number(quantity) + 1;
        // console.log(newQuantity);
        getElement("total-quantity").innerText = newQuantity;

    })
}

const clearBtn = getElement("clear-btn");
clearBtn.addEventListener("click", function () {
    const cartContainer = getElement("cart-container")
    cartContainer.innerHTML = "";
    getElement("total-price").innerText = 0;
    getElement("total-quantity").innerText = 0;

})



// document.getElementById("cart-btn-1").addEventListener("click", function () {
    
//    const priceElement = getElement("price-1").innerText;

//    const title= getElement("title").innerText;

//    const price = parseFloat(priceElement);
//    console.log(price, title);

//    const totalPriceElement = getElement("total-price");
//    const totalPriceText = totalPriceElement.innerText;
//    const totalPrice = parseFloat(totalPriceText);
//    const newTotalPrice =Number(totalPrice) + Number(price);
//    totalPriceElement.innerText = newTotalPrice;
// //    console.log(newTotalPrice);

// const newCart = document.createElement("div");
// newCart.innerHTML = `
        //  <div class="flex justify-between items-center bg-gray-300 p-4 rounded-xl">
        //          <img src="assets/kitchen-1.png" alt="" class="w-10 " />
        //          <div>
        //           <h2 class="text-md font-bold">${title}</h2>
        //           <p>${price} TK</p>
        //      </div>
        //     </div>
// `;
// const cartContainer = getElement("cart-container");
// cartContainer.appendChild(newCart)
// });