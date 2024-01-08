function showInfoInCard(product, index) {
  // ai anulat paddingul de la sectiunea de pe linia 7, pe linia 8. Imaginea nu trebuie pusa intr-un div in cazul tau sau poti scoate -mx-4 de pe linia 8
  document.body.innerHTML += `
   
        <div class="flex w-full flex-col px-4">
            <div class="-mx-4 flex flex-wrap">
                <div class="flex w-full max-w-7xl px-4 mx-auto flex-col shadow-2xl">
                    <div class="flex flex-wrap ">
                    <a href="user.html?userId=${product.data[index].id}">
                        <img src="${product.data[index].avatar}" alt="Image profil">
                    </a>
                    </div>
                <div class="flex flex-wrap flex-col">
                    <p>${product.data[index].first_name}</p>
                    <p>${product.data[index].last_name}</p>
                    <p>${product.data[index].email}</p>
                </div>
                <div class="flex flex-wrap justify-center">
                    <div class="p-4 justify-center text-3xl flex rounded-lg  border-4 border-black  w-24 bg-teal-400 hover:bg-cyan-600  "  href="">
                      <i class=" fa-brands fa-star " onclick="toggleSchimbaCuloare(this)" >
                      </i>
                    </div>
                    
                    <div class="${product.data[index].isTrue["true"]}">
                        Hai ca ai reusit
                    </div>
                    
                </div>
            </div> 
        </div>
    
  `;
}

function toggleSchimbaCuloare(element) {
  element.classList.toggle("text-yellow-300");
}

const baseURL = "https://reqres.in/api"; // pentru ca se repeta si partea cu /api, poti pune baseURL ca "https://reqres.in/api"

const USERS = "/users";
// nu exista preendpoint

const ENDPOINTS = {
  // P1: "?page=1", // nu pune key-ul din obiect ca numar.
  // P2: "?page=2", // asta e un query parameter, nu un endpoint
  // slash niciodata nu il store-uim. In obiectele astea punem stringurile la care avem sanse sa gresim gen typo
};

async function getData() {
  // for (let i = 0; i < 3; i++) {
  //   if (i === 0) {
  try {
    // mai jos a trebuit sa pui ENDPINTS[1] din cauza commentului de pe linia 30
    const request = await fetch(baseURL + USERS);
    const response = await request.json();
    for (let index = 0; index < response.data.length; index++) {
      response.data[index].isFavorite = false;
      response.data[index].isTrue = Math.random() < 0.5;
      if (response.data[index].isTrue) {
        showInfoInCard(response, index);
      }
    }
  } catch (e) {
    console.log(e);
  }
  // } else if (i === 1) {
  //   try {
  //     // mai jos a trebuit sa pui ENDPINTS[1] din cauza commentului de pe linia 30
  //     const request = await fetch(baseURL + USERS );
  //     const response = await request.json();
  //     for (let index = 0; index < response.data.length; index++) {
  //       response.data[index].isFavorite = false;
  //       showInfoInCard(response, index);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }

  // }

  // }
}

getData();

// // ai o singura functie de getData, nu doua. Asta face requestul catre API. Paginarea se face separat
// async function getData1() {
//   try {
//     // mai jos a trebuit sa pui ENDPINTS[1] din cauza commentului de pe linia 30
//     const request = await fetch(baseURL + USERS + ENDPOINTS.P1);
//     const response = await request.json();
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// //   finally {
// //     // finally e optional. Aici, il poti sterge ca nu ai nevoie de el
// //     console.log("done");
// //   }
// }

// async function main() {
//   // te rog consistenta. Intotdeauna vei face cu async / await. Niciodata cu .then
//   const result = await getData1().then((data) => {
//     return data;
//   });
//   for (let index = 0; index < result.data.length; index++) {
//     result1.data[index].isFavorite = false;
//     showInfoInCard(result, index);
//   }
// }

// main();

// async function getData2() {
//   try {
//     const request = await fetch(baseURL + USERS + ENDPOINTS.P2);
//     const response = await request.json();
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
//   finally {
//     console.log("done");
//   }
// }

// async function main1() {
//   const result1 = await getData2().then((data) => {
//     return data;
//   });
//   for (let index = 0; index < result1.data.length; index++) {
//     result1.data[index].isFavorite = false;
//     showInfoInCard(result1, index);
//   }
// }

// main1();
