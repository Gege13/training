/* 
multi line comment in javascript
*/

// single line comment 

var training = "Sunt un var"; // NU FOLOSI
let training_two = "Sunt un let" // valoarea variabilei poate fi schimbata ulterior
const trainingThree = "Sunt un const"; // Nu pot schimba valoarea unei constante o data definita

console.log("Up and running!");

console.log(9)
console.log(training)
console.log(5+5) // adunare - va printa in consola 10

console.log("5"+5) // concatenare - va printa 55

console.log("training_two BEFORE: ",training_two);
training_two = 2023;
console.log("training_two AFTER: ",training_two);


console.log("trainingThree BEFORE: ", trainingThree)
// trainingThree = false  // va produce eroare de Assignment to Constant Variable 
console.log("trainingThree AFTER: ", trainingThree)
// primitivele din javascript sunt: number, boolean, string
// "5" == 5 va returna true pentru ca js le face de acelasi type
// "5" === 5 va returna false pentru ca js verifica daca sunt acelasi data type si aceeasi valoare
// PENTRU ACASA !!!!!!!!!!!!!!!!!! scrieti in consola si studiati proto
// "".__proto__
// false.__proto__
// 5.__proto__

let variabila;
console.log("let gold: ", variabila)
// va returne let gol: undefined, pt ca variabila exista, dar nu are valoare
// undefined este o primita pt tipul de date string
// null este primitiva pentru tipul de date number

const arrayUnu = ["1","2","3"];
const arrayDoi = [1,2,3];
const matrix = [[1,2],[3,4],]
const bonFiscal = [
    ["produs", "cantitate", "pret unitar"],
    ["paine", 6, 1.99],
    ["zahar", 3, 4.99]
]

// printam in consola "1" din arrayUnu
console.log(arrayUnu[0]);
// printam in consola "2" din arrayUnu
console.log(arrayUnu[1]);
// printam in consola "3" din arrayUnu
console.log(arrayUnu[2]);

// concatenare de strings
console.log("Paine total: " + bonFiscal[1][1] * bonFiscal[1][2]);

// template strings
console.log(`Zahar total: ${bonFiscal[2][1]*bonFiscal[2][2]}`);

// OBIECTELE
const obj = {};

const loginData = {
    email: "alex@enovatika.com",
    password: "qwer1234",
};

const account = {
    token: "JWT Token",
    accountDetail: {
        firstName: "Alex",
        lastName: "Zmed",
        profileImage: "https://source.unsplash.com/30x30"
    },
    roles: ["admin","collaborator"],
    MFAenabled: true,
    accountLevelAccess: 3,
};

console.log(`Token: ${account.token}`);

console.log(`First name: ${account.accountDetail.firstName}`);

console.log(`First role: ${account.roles[0]}`);

const firstArticle = {
    meta: {
        title: "titlu pagina + titlu din share",
        description: "descrierea de pe google search sau cand dau share pe social media",
        image: "url absolut al imaginii",
    },
    title: "titlu articol",
    author: {
        name: "Zmed Alex",
        job: "Front-End developer",

    },
    content: "<h1>Hi</h1><p>Text</p>",
    categories: ["article","blog"],
    publishDate: 123456789,
    published: false,
};

const secondArticle = {
    meta: {
        title: "titlu pagina + titlu din share",
        description: "descrierea de pe google search sau cand dau share pe social media",
        image: "url absolut al imaginii",
    },
    title: "titlu articol",
    author: {
        name: "Zmed Alex",
        job: "Front-End developer",

    },
    content: "<h1>Hi</h1><p>Text</p>",
    categories: ["article","blog"],
    publishDate: 123456789,
    published: false,
};

// obiectele sunt immutable
// nu schimbati valoarea unui key din obiect!!!!!

// COPIEZ OBIECTUL
const thirdArticle = {
    ...secondArticle, // spread operator, functioneaza pe array si obiecte
    publishDate: new Date(secondArticle.publishDate),
};

console.log(thirdArticle);

// OBJECT DESTRUCTURING
const {meta, author} = firstArticle;
console.log(meta,author);

// creez un obiect din alte obiecte
const allArticlesObject = {
    firstArticle: firstArticle,
    secondArticle: secondArticle,
    thirdArticle, // daca numele de key este identic cu numele variabilei, punem doar key
};

console.log(allArticlesObject)

// creez un array cu toate obiectele
const allArticles = [firstArticle,secondArticle,thirdArticle];
console.log(allArticles);

// tema sa cream un obiect cu toate datele dinamice de pe pagina de produs eMag
// dinamic = toate elementele care coincid in paginile de produs
// sa fac un obiect pe care sa il structurez ca si ce am facut aicea
