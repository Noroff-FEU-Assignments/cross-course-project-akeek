const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://www.bolf.one/wp-json/wc/store/products/" + id;


async function fetchProduct(){
    try{
        const response = await fetch(url);
        const results = await response.json();

        createHtml(results)
    }

    catch(error){
        console.log(error)
    }
}


function createHtml(products) {
    console.log(products)
    detailContainer.innerHTML = 
    `<h1>${products.name}</h1>
        <img src="${products.images[0].src}" alt="${products.name}">
        <div>${products.short_description}</div>
        <div class="price">Price: ${products.prices.currency_code} ${products.prices.price},-</div>`
}

fetchProduct();