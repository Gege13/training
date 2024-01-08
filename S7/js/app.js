const asusLaptop = {
  id: "qwer-1234",
  categories: ["laptop"],
  name: "laptop Asus",
  image: "/poze/nume.png",
  price: {
    original: 1899.99,
    discountedPrice: 1849.99,
    rate: 12,
    otherDiscounts: [
      {
        provider: "flip",
        discount: 50,
      },
    ],
    seller: {
      name: "eMag",
      link: "/seller/eMag",
    },
  },
  configurations: {
    "Alege tip procesor": [
      {
        label: "i3",
        link: "/products/laptops/nume-laptop-i3",
        isAvailable: true,
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
        isAvailable: true,
      },
      {
        label: "16GB",
        link: "/products/laptops/nume-laptop-16GB",
        isAvailable: true,
      },
    ],
  },
};

const appleLaptop = {
  id: "qwer-1234",
  categories: ["laptop"],
  name: "Macbook PRO",
  price: {
    original: 6899.99,
    discountedPrice: 6889.99,
    rate: 6,
    otherDiscounts: [
      {
        provider: "flip",
        discount: 50,
      },
    ],
    seller: {
      name: "Apple",
      link: "/seller/Apple",
    },
  },
  configurations: {
    "Alege tip procesor": [
      {
        label: "M1",
        link: "/products/laptops/nume-laptop-m1",
        isAvailable: true,
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
        isAvailable: true,
      },
      {
        label: "32GB",
        link: "/products/laptops/nume-laptop-32GB",
        isAvailable: true,
      },
    ],
  },
};

const products = [asusLaptop, appleLaptop,asusLaptop, appleLaptop];

// functions are hoisted , js face 2 ture in codul meu
// prima tura alocare de  resurse
// tura doi este sa treaca prin cod si sa-l execute
//variabiele nu sunt hoisted
zmedAlex();

function zmedAlex() {
  console.log("executat");
}

function zmedAlexTwo(text) {
  console.log(text);
}
function zmedAlexThree(number, text) {
  console.log(number, text);
}

//arrow functions are not hoisted
// functionUan();

const functionUan = () => {
  console.log("arrow function one");
};

const functionTu = (arg1) => {
  console.log(arg1);
};

function handleCalculateProductDiscount(product) {
  const { price } = product;

  const discountValue = price.original - price.discountedPrice;

  return Math.round(discountValue);
}

console.log(handleCalculateProductDiscount(asusLaptop));
console.log(handleCalculateProductDiscount(appleLaptop));

function handleCalculateRata(product) {
  const { price } = product;

  const rata = price.discountedPrice / price.rate;

  return rata.toFixed(2);
}

// console.log(handleCalculateRata(appleLaptop));
// console.log(handleCalculateRata(asusLaptop));
products.forEach(p => console.log(handleCalculateProductDiscount(p)))

function handleGenerateProductCard(product) {
  document.body.innerHTML += `
    <h1>${product.name}</h1>
    <p class="line-through">${product.price.original}</p>
    <p class="font-bold">${product.price.discountedPrice}</p>
    <p >Economisesti: ${handleCalculateProductDiscount(product)} Lei</p>
    <p >Sau il poti achizitiona in ${
      product.price.rate
    } rate de ${handleCalculateRata(appleLaptop)} Lei</p>
    <p> ${
      product.configurations["Alege tip procesor"][0].isAvailable
        ? "In stoc"
        : "Indisponibil"
    }</p>
`;
}

handleGenerateProductCard(asusLaptop);
handleGenerateProductCard(appleLaptop);

// de generat toate detaliile de produs intr-un card stilizat cu tailwind

{
  /* <img src=""></img> */
}

console.log(appleLaptop.configurations["Aleege tip procesor"]);

// return ma scoate din functie

function checkIfPositiveNumber(number) {
  if (number > 1) {
    return "Number pozitive";
  }

  if (typeof number !== "number") {
    return "Argument error: expected nr, got " + typeof number;
  }

  if (number < 0) {
    return "negative number";
  }

  return "number is 0";
}

console.log(checkIfPositiveNumber(1));
console.log(checkIfPositiveNumber(0));
console.log(checkIfPositiveNumber(-1));
console.log(checkIfPositiveNumber("zmed"));
console.log(checkIfPositiveNumber(true));
console.log(checkIfPositiveNumber({}));

const isAdmin = true;
const isAccountConfirmed = true;

document.body.innerHTML += isAdmin
  ? `<h1>Welcome Administrator </h1>`
  : `<h1>Admin required</h1>`;

document.body.innerHTML += isAdmin && isAccountConfirmed ? '<p>All good</p>' : '<p>Verification failed</p>';

const account = {
    fisrtName: "Alex",
    lastName: "Zmed",
    accountConfirmed: false,
    accountType: "user",
    isAdmin: false
}

document.body.innerHTML += account.accounttype === "buyer" || account.isAdmin && `session valid`;
/*
echivalentul ternary de mai sus:

if (account.accounttype === "buyer" || account.isAdmin){

    `session valid`;
}

*/

for (let i = 0; i < products.length; i++){
    handleGenerateProductCard(products[i]);
}


// products.forEach(p => p.name = "ZMED")

// forEach nu returneaza nimic, doar trece prin elemente
products.forEach( (product, index) => {
    document.body.innerHTML +=`
        <div class=" flex py-2 px-4 shadow-sm mb-4" key="${index} "> ${product.name} </div>
    `;
});

"wha the hell?1".split("").forEach(letter => console.log(letter));

const myString = "What the hell?!".split("");

// map returneaza valoarea obtinuta in fiecare iteratie
products.map(p => {
    document.body.innerHTML +=`
    <div class=" flex py-2 px-4 shadow-sm mb-4 text-sky-500" key="${p.id} "> ${p.name} </div>

    `;
})

// filter va returna un elem nou doar cu elem care indeplinesc conditia
const filteredProducts = products.filter(p => p.price.discountedPrice < 3000);
console.log("filter",filteredProducts);


// find returneaza primul elem din array care indeplineste conditia. DOAR primul
const foundProduct = products.find(p=> p.name === "laptop Asus");
console.log("find",foundProduct);

// returneaza true/false daca conditia este indeplinita sau nu
const someProduct = products.some(p => p.name === "nu exista")
console.log(someProduct)

const cities = {
    timisoara: "Timisoara",
    arad: "Arad",
    bucuresti:"Bucuresti",
    cluj:"Cluj"
}

const people = [{
    name: "ceva",
    city: "Timisoara",
}, {
    name: "ceva",
    city: "Arad",
},
    {
name: "ceva",
    city: "Bucuresti",
},
{
    name: "ceva",
    city: "Cluj",
}]

function getPersonTownship(person) {
    switch(person.city){
        case cities.timisoara:
             return "timisorean"
        case cities.arad:
             return "aradean"
        case cities.bucuresti: 
            return "bucurestean"
        case cities.cluj:
             return "arogant"
        default :
             return "N/A"
    }
}

people.map(p => console.log(getPersonTownship(p)))

// returneaza un array cu toate main level keys din obiect
console.log(Object.keys(asusLaptop))

Object.keys(asusLaptop.configurations).forEach(k => console.log(`${k} : ${asusLaptop.configurations[k].map(c => c.label)}`))