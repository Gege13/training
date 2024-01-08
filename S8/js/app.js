// setTimeout(()=> {
//     alert("Am ajuns")
// }, 10000);

// console.log("ceva");

// 1,3,2
console.log(1);
setTimeout(()=>{
    console.log(2);
},0);
console.log(3);

// un PROMISE chel -> nu il vom folosi niciodata

const shouldResolve = true;

const firstPromise = new Promise((resolved, rejected)=>{
    if(shouldResolve){
        resolved("OK");
    } else{
        rejected("Failed");
    }
    resolved("OK");
    rejected("Failed");
});

firstPromise.then((response)=>{
    console.log(response)
} ).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Done executing promise");
});

const baseURL = "https://reqres.in";

const ENDPOINTS = {
    USERS: "/api/users",
};

const data =  fetch(baseURL + ENDPOINTS.USERS).then(res => res.json()).then(json => console.log(json)).catch(e => console.log(e)).finally(()=> console.log("DONE.finally..."));


// ASA SE FAC NETWOR REQUESTS
async function getData() {
    try{const request = await fetch(baseURL + ENDPOINTS.USERS);
    const response = await request.json();
    console.log(response);} catch(e) {
        console.log(e);
    } finally{console.log("done")};

}

getData();

async function getPsotData() {
    try { 
        const request = await fetch(baseURL + ENDPOINTS.USERS, {
            method: "POST",
            body: JSON.stringify({
                name: "morpheus",
                job: "leader",
            })
        });
    const response = await request.json();
    console.log(response);
} catch(e) {
        console.log(e);
    } finally{console.log("done")};

}

getPsotData();

// ma ajuta sa citesc din url
const urlPrams = window.location.search;

// 2 fisiere de html
// index.html - va face un request catre https://reqres.in/api/users
// si va genera in html cate un card pt fiecare user cu toate datele
// fiecare card va avea un link care arata a buton ce redirectioneaza pe /user.html?id=X unde X este id-ul userului

//user.html - va face un network request la https://reqres.in/api/users/X unde X este ID-ul din url
// va genera o pagina frumoasa pt acel user
// afla cum se citeste fiecare valoare din url params
