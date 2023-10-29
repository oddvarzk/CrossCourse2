const textContainer = document.querySelector(".jacket-box-grid");

const discountContainer = document.querySelector(".jacket-box-second-grid");

const url = "https://www.oddvarkristiansen.no/wp-json/wc/store/products";

async function callApi(){
    try {
        const response = await fetch (url);
        const results = await response.json();

        for(let i = 0; i < results.length; i++){
            if (i < 5){
            textContainer.innerHTML += `<a href="product-preview.html?id=${results[i].id}">
                                            <div class=jacket-box>                              
                                                <div class="jacket-image-box">
                                                    <img alt="${results[i].name}" class="jacket-image" src="${results[i].images[0].src}">
                                                </div>
                                                <div class="jacket-info">
                                                    <p class="jacketText">${results[i].name}</p>
                                                    <p class="jacket-description">${results[i].description}</p>
                                                    <p class="jacket-price">${results[i].prices.price} kr</p>
                                                </div>
                                            </div>
                                        </a>`
        }
    }
    } catch (error) {
        textContainer.innerHTML = message("error", error);
    }
}
callApi();