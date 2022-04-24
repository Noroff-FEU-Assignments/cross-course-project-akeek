const url = "https://www.bolf.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");


async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHtml(getResults);
    }

    catch(error){
        console.log(error)
    }
}



function createHtml(products){
    products.forEach(function(product){
        console.log(product)
        productContainer.innerHTML += 
        `<a href="details.html?id=${product.id}" class="product">
            <h2>${product.name}</h2>
            <img src="${product.images[0].src}" alt="${product.name}">
            <div class="price">Price: ${product.prices.currency_code} ${product.prices.price},-</div>
        </a>`;
    })
}

getProducts();