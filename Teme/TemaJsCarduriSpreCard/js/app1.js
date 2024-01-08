async function showInfoInCard() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    // obiectul il transforma de asa natura incat sa pastreze doar the query params din url,
    // practic taie partea din standa de la ? la ? din url si pastreaza ce ii in dreapta
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.userId; // "some_value"
  console.log("value = ", value);
  let user = await getData(value);
  document.body.innerHTML += `
    <div class="flex w-full flex-col px-4">
        <div class="-mx-4 flex flex-wrap">
            <div class="flex w-full max-w-7xl px-4 mx-auto flex-col shadow-2xl">
                <div class="flex flex-wrap -mx-4">
                    <img src="${user.data.avatar}" alt="Image profil">
                </div>
            <div class="flex flex-wrap -mx-4 flex-col">
                <p>${user.data.first_name}</p>
                <p>${user.data.last_name}</p>
                <p>${user.data.email}</p>
                <p>${user.data.id}</p>
            </div>
        </div>
    </div>
`;
}

const baseURL = "https://reqres.in/api"; // comment in app.js

const USERS =  "/users/";


const ENDPOINTS = {
  1: "?page=1", // la fel ca in app.js
  2: "?page=2",
};

async function getData(userId) {
  try {
    // slash il poti pune dupa /users/. Nu il pui in propria variabila
    const request = await fetch(
      baseURL + USERS + userId
    );
    const response = await request.json();
    // console.log(response); // nu lasa console.log in cod, decat atat cat il folosesti
    return response;
  } catch (e) {
    console.log(e);
  } 
//   finally {
//     // nu ai nevoie de finally aici. In general nu ai nevoie de el
//     console.log("done");
//   }
}

showInfoInCard();
