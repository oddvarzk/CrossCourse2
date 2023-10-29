document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector(".purchase-container");
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
            productContainer.innerHTML = "Error: " + error;
        }
    }
    callApi();

    function createHtml(result) {
        productContainer.innerHTML = `<div class="women-product-box">
                                        <img alt="${result.title}" class="jacket-image" src="${result.image}">
                                    </div>
                                    <div class="purchase-info">
                                        <p><span>Item : ${result.title}</p>
                                        <p><span>Price</span> : ${result.price} $</p>
                                        <p><span>Size</span> : M </p>
                                        <p><span>Quantity</span> : 1 </p>
                                    </div>`;
    }
});
