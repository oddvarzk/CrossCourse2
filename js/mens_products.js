document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.querySelector(".jacket-box-grid");

    const url = "https://api.noroff.dev/api/v1/rainy-days";

    async function callApi() {
        try {
            const response = await fetch(url);
            const results = await response.json();

            for (let i = 0; i < results.length; i++) {
                if (results[i].gender === "Male") {
                    textContainer.innerHTML += `<a href="product-preview.html?id=${results[i].id}">
                                            <div class=jacket-box>                              
                                                <div class="jacket-image-box">
                                                    <img alt="${results[i].title}" class="jacket-image" src="${results[i].image}">
                                                </div>
                                                <div class="jacket-info">
                                                    <p class="jacketText">${results[i].title}</p>
                                                    <p class="jacket-description">${results[i].description}</p>
                                                    <p class="jacket-price">${results[i].price} $</p>
                                                </div>
                                            </div>
                                        </a>`;
                }
            }
        } catch (error) {
            textContainer.innerHTML = message("error", error);
        }
    }
    callApi();
});
