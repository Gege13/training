const baseURL = "https://reqres.in";

const PREENDPOINTS = {
    USERS: "/api/users",
};

const ENDPOINTS = {
    1: "1",
    2: "2",
}
// // ASA SE FAC NETWOR REQUESTS
// async function getData() {
//     try{
//         const request = await fetch(baseURL + ENDPOINTS.USERS);
//     const response = await request.json();
//     console.log(response);} 
//     catch(e) {
//         console.log(e);
//     } 
//     finally{console.log("done")};

// }

// getData();

async function getData() {
    try {
        const request = await fetch(baseURL + PREENDPOINTS.USERS + ENDPOINTS[1]);
        const response = await request.json();
        return response;
    } 
    catch (e) {
        console.log(e);
    } 
    finally {
        console.log("done");
    }
}

async function otherFunction() {
    const product = await getData();
    // utilizați variabila "data" pentru a accesa informațiile din răspunsul primit
    console.log(product);
}

otherFunction();

// let product1;
// let product2;

// async function otherFunction1() {
//     product1 = await getData1();
//     // utilizați variabila "data" pentru a accesa informațiile din răspunsul primit
//     console.log(product1);
// }

// async function otherFunction2() {
//     product2 = await getData2();
//     // utilizați variabila "data" pentru a accesa informațiile din răspunsul primit
//     console.log(product2);
// }

// getData1();
// otherFunction1();
// for (let index = 0; index < product1.data.length; index++) {
//     showInfoInCard(product1, index);
// }

// getData2();
// otherFunction2();
// for (let index = 0; index < product2.data.length; index++) {
//     showInfoInCard(product2, index);
// }


const obj = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}



function showInfoInCard(product){ 
    document.body.innerHTML +=`
        <p>${product.data[4].first_name}</p>
        <img src="${product.data[4].avatar}" alt="Image profil">
    `;}


async function getUsers() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  const result = getUsers().then((data) => {
    return data;
  });
  console.log("result = ",result);

  async function main() {
    const result = await getUsers().then(data => {
      return data;
    });
    result.data[0].isFavorite = false;
    result.data[1].isFavorite = false;
    result.data[2].isFavorite = false;
    result.data[3].isFavorite = false;
    result.data[4].isFavorite = false;
    result.data[5].isFavorite = false;

    console.log("result = ", result);
    
    showInfoInCard(result);
  }
  
  main();



// // Asta nu merge
// function showInfoInCard(product, index){ 
//     document.body.innerHTML +=`
//         <p>${product.data[index].first_name}</p>
//         <img src="${product.data[index].avatar}" alt="Image profil">
//     `;}


// async function getUsers() {
//     try {
//       const response = await fetch('https://reqres.in/api/users?page=2');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   const result = getUsers();

//   showInfoInCard(result, "4");

function showInfoInCard(product) { 
    product.then(data => {
      const userId = data.data[4].id;
      const userProfileUrl = `user-profile.html?userId=${userId}`;
      document.body.innerHTML += `
        <p>${data.data[4].first_name}</p>
        <img src="${data.data[4].avatar}" alt="Image profil">
        <a href="${userProfileUrl}">Vezi profilul utilizatorului</a>
      `;
    }).catch(error => {
      console.log(error);
    });
  }

  // <a href="${userProfileUrl}">Vezi profilul utilizatorului</a>