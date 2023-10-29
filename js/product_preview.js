document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector(".jacket-box");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

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
                                    <img alt="${result.title}" class="jacket-image" src="${result.image}">
                                </div>
                                <div class="jacket-info">
                                    <p class="jacket-title">${result.title}</p>
                                    <p class="jacket-description">${result.description}</p>
                                    <p><span class="p1">Price : </span>${result.price} $</p>
                                    <p><span class="p1">Color : </span>${result.baseColor}</p>
                                    <p><span class="p1">Size : </span>${result.sizes}</p>
                                    <a href="products-detail.html?id=${result.id}"><button class="buy-now-button">Go to checkout</button></a>
                                </div>`;
    }
});