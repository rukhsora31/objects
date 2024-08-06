let person = {
    name: 'rhs',
    surname: 'Axmadjanova',
    age: 1
}

person.age = 1
person.address = 'Tashkent'
person['name'] = 'r'

let car = {
    brand: 'BMW',
    model: 'm5',
    horsePower: 150,
    start: function () {
        console.log('машина заводиться');
    }
}
car.colo = 'Black'
car.horsePower = 1200
delete car.model 
// car.start()
// console.log(car);
// console.log(person);

let car2 = {...car}
// console.log(car2);
let company = {
    name: 'GitHub',
    owner: {
        name: 'Chris',
        surname: 'Wanstrath',
        networth: '2.2 billion',
        address: {
            city: 'Chicago',
            street: 'smth'
        }
    }
}

let book = {
title: 'война и мир',
author: 'lev tolstoy',
year: 1867
}

book.price = '1200$'

let book2 = {...book}

book2.title = 'война и мир 2'
book2.year = '2024'

function print(obj) {
    for(let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

// print(book)
// console.log('_ _ _ _');
// print(book2)

// console.log(company);

let school = {
    name: 'President school',
    teacher: {
        math: 'Davlat Polatov',
        georaphy: 'Maria k',
        history: 'Nadejda v'
    },
    students: {
        1: 'vadim v',
        2: 'laylo b',
        3: 'anton k'
    },
    hasEatery: true,
    rooms: 163
}

console.log(school);

