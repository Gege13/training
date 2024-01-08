const asusLaptop = {
    id:"qwer-1234",
    categories: ["laptop"],
    name: "laptop Asus",
    image: "/poze/nume.png",
    price:{
        original: 1899.99,
        discountedPrice: 1849.99,
        rate: 12,
        otherDiscounts: [{
            provider: "flip",
            discount: 50,
        }],
        seller: {
            name: "eMag",
            link: "/seller/eMag"
        }
    },
    configurations: {
        "Aleege tip procesor": [
            {
                label: "i3",
                link: "/products/laptops/nume-laptop-i3",
                isAvailable: true
            },
            {
                label: "i5",
                link: "/products/laptops/nume-laptop-i5",
                isAvailable: false,
            },
        ],
        "Alege capacitate memorie": [
            {
                    label: "8GB",
                    link: "/products/laptops/nume-laptop-8GB",
                    isAvailable: true
                },
                {
                    label: "16GB",
                    link: "/products/laptops/nume-laptop-16GB",
                    isAvailable: true
                },
            ],
    },

}

const appleLaptop = {
    id:"qwer-1234",
    categories: ["laptop"],
    name: "Macbook PRO",
    image: "imagini/a2141_1_1.jpg",
    price:{
        original: 6899.99,
        discountedPrice: 6889.99,
        rate: 6,
        otherDiscounts: [{
            provider: "flip",
            discount: 50,
        }],
        seller: {
            name: "Apple",
            link: "/seller/Apple"
        }
    },
    configurations: {
        "Aleege tip procesor": [
            {
                label: "M1",
                link: "/products/laptops/nume-laptop-m1",
                isAvailable: true
            },
            {
                label: "M1 MAX",
                link: "/products/laptops/nume-laptop-m1-max",
                isAvailable: false,
            },
        ],
        "Alege capacitate memorie": [
            {
                    label: "16GB",
                    link: "/products/laptops/nume-laptop-16GB",
                    isAvailable: true
                },
                {
                    label: "32GB",
                    link: "/products/laptops/nume-laptop-32GB",
                    isAvailable: true
                },
            ],
    },

};

function handleCalculateProductDiscount(product){

    const{price}=product;

    const discountValue = price.original - price.discountedPrice

    return Math.round(discountValue);
};

function handleCalculateRata(product){

    const{price} = product;

    const rata = price.discountedPrice / price.rate

    return rata.toFixed(2);

};

function showInfoInCard(product){
    document.body.innerHTML +=`
    

    <div class="flex px-4 flex-col">
       
        <div class="-mx-4 flex flex-wrap">
   
          <div class="flex w-full max-w-7xl px-4 mx-auto flex-col shadow-2xl">

            <div class="-mx-4 flex py-2">
      
              <div class="flex p-48 w-1/2 text-red-400 justify-center flex-col">
                <h1><strong>${product.name}</strong></h1>
                <img class="" src="${product.image}" alt="" />
                <h3>Seller: ${product.price.seller.name}</h3>
                <h2><strong>Procesor: ${product.configurations["Aleege tip procesor"][0].label}</strong></h2>
                <h2><strong>Rami: ${product.configurations["Alege capacitate memorie"][1].label}</strong></h2>
              </div>

              <div class="flex  w-1/2 text-red-400 justify-center flex-col">
              <div class="flex flex-wrap -mx-4">
              <div class=" flex flex-col px-4 mb-12"> 
              
                <h3>Pret original: ${product.price.original}</h3>
                <h2>Pret redus: ${product.price.discountedPrice}</h2>
                <h1>Reducere:${handleCalculateProductDiscount(product)} Lei!!!</h1>
                <h2>Rata lunara de ${handleCalculateRata(product)} timp de ${product.price.rate} luni</h2>
                </div>
                </div>
                <div class="flex flex-wrap -mx-4">
            <div class="flex text-center px-4 ">
            <a class="text-3xl leading-7 font-medium decoration-rose-500 py-4 px-10 rounded-3xl bg-teal-400 hover:bg-sky-700 inline-block text-center " href="#">Cumpara</a>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    `;
};

showInfoInCard(appleLaptop);
showInfoInCard(asusLaptop);


