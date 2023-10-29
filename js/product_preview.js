document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector(".jacket-box");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const url = "http://cms.local/wp-json/wc/store/products/" + id;

    async function callApi() {
        try {
            const response = await fetch(url);
            const result = await response.json();

            createHtml(result);

        } catch (error) {
            productContainer.innerHTML = message("error", error);
        }
    }
    callApi();

    function createHtml(result) {
        productContainer.innerHTML = `<div class="jacket-image-box">
                                    <img alt="${result.title}" class="jacket-image" src="${result.images[0].src}">
                                </div>
                                <div class="jacket-info">
                                    <p class="jacket-title">${result.name}</p>
                                    <p class="jacket-description">${result.description}</p>
                                    <p><span class="p1">Price : </span>${result.prices.price} kr</p>
                                    <p><span class="p1">Size : </span>${result.attributes[0].terms[0].name[1]}</p>
                                    <a href="products-detail.html?id=${result.id}"><button class="buy-now-button">Go to checkout</button></a>
                                </div>`;
    }
});