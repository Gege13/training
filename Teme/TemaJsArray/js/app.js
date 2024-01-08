const obj ={
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



// in cazul acesta imi returneaza 6 obiecte, fiecare avand valorile de la fiecare index 
const iterator1 = obj.data[Symbol.iterator]();

for (const value of iterator1) {
    console.log(value);
  }

// returneaza a doua si penultima valoare din array
// let index = 2;
// console.log(`An index of ${index} returns ${obj.data.at(index)}`);

// index = -2;
// console.log(`An index of ${index} returns ${obj.data.at(index)}`);
  
// adauga la array-ul nou creat toate valorile din primul si adauga in continuare elem concatenat
const array = obj.data.concat(obj.page);
console.log(array);
// same ca mai sus
const mergedArray = [...obj.data,...obj.page]  





// // de ce imi face un array nou doar cu 0 so cu micahel, fara restul?
// const iterator1 = obj.data.entries();
// console.log(iterator1.next().value);

// const isBelowThreshold = (currentValue) => currentValue < 40;

// console.log(obj.data.length.every(isBelowThreshold));
// // Expected output: true


// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // Expected output: Array [1, 2, 0, 0]

// // Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// // Expected output: Array [6, 6, 6, 6]

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = obj.data.filter((word) => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]


// //  gaseste primul elem ce indeplineste conditia si se opreste
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);
// // Expected output: 12


// // cauta elem care este mai mare si dupa afiseaza indexul acelui elem care este mai mare, daca dai un nr mai mare decat toate elem return -1
// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // Expected output: 3


// findLast incepe cautarea de la capatul array-ului si merge pana la inceput pana gaseste o valoare valida

// console.log(Array.prototype.flat.call(obj));



// obj.data.forEach((element) => console.log(element));

// fromAsync - explicatie pls


// console.log(Array.isArray([1, 3, 5]));
// // Expected output: true

// console.log(Array.isArray('[]'));
// // Expected output: false

// console.log(Array.isArray(new Array(5)));
// // Expected output: true


// ce face de fapt si de drept .reduce, .reduceRight(de ce am avea noevoie), .toLocaleString? 

