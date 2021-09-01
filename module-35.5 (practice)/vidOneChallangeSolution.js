
/*
1. Object with property (string, boolean, number, object, array, method which will return a property value)
2. template string. minimum 3 property will be dynamic (nested object property, array second element, another property)
3.1: no parameter arrow function. return 89
3.2: single parameter arrow function. will divide input by 7
3.3: arrow function with two parameters.
3.4 multi-line arrow function. two parameter.
.
4. map divide each element by 7
5. map, forEach, filter, find
6. desctructuring on object and array
.
*/

//1. Object with property (string, boolean, number, object, array, method which will return a property value)

let myObj = {
    name: 'olodama',
    isCool: true,
    roll: 12,
    persons: { name: 'lasengan' },
    numbers: [12, 1200, 12, 32, 12],
    props: () => {
        let life = 'beautiful'
        return { ...myObj, life }
    },
    isGood: false,
}

//2

let dynamicThreeProps = `hos name is ${myObj.name}. is he cool? ->${myObj.isCool}. his age is${myObj.numbers[1]}. hsi fathers name is ${myObj.persons.name}`




//3.1 

let eightyNine = () => 89


//3.2
let divideBySeven = (num) => num / 7

//3.3 

let additionNDevide = (num1, num2) => {
    let sum = num1 + num2
    return sum / 2
}


//3.3 

let paramWithSeven = (num1, num2) => {
    return (num1 + 7) + (num2 + 7)
}


//4 & 5 map. forEach filter, find

//map
let myMap = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70].map(el => el / 7);
console.log(myMap);
//forEach
let myForEach = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
myForEach.forEach(el => {
    console.log(el)
})

//filter [ condition match korle oder niye new arr dibe]

let numbers = [-1, 2.43, -3, -40, 12, 43, 54, -32, -65];

let possitiveNums = numbers.filter(el => el >= 0);
let negetiveNums = numbers.filter(el => el <= 0);
console.log(possitiveNums, negetiveNums)

//find [ jekone akta khujbe , paile return kore dibe ] na paile undefind dibe

let numbersOne = [-1, 2.43, -3, -40, 12, 43, 54, -32, -65];
let myFinding = numbersOne.find(el => el === -40);
console.log(myFinding)


//6.

let anoObj = {
    name: 'olodamao',
    age: 1200000000000,
    isCool: false
}

let { name, age, isCool } = anoObj;
console.log(age)

let anoArr = [12, 1000, 14];
let [a, b, c] = anoArr;
console.log(b)

let second = anoArr[1]
console.log(second)

console.clear()

//7 & 8 * 9 jsonPlaceholder => fetch all photo, aktate click korle spesific dekhabe, use forEach


fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => gotData(data));

let gotData = (data) => {
    data.forEach(el => {
        // console.log(el)
        let { id, title, thumbnailUrl, url } = el
        let parentDiv = document.getElementById('photos');
        let childDiv = document.createElement('div');
        childDiv.innerHTML = `
        <div onclick="singleCard(${id})" >
            <p>${id}</p>
            <h3>${title}</h3>
            <img src="${thumbnailUrl}" alt="as">
            <!--   <img src="${url}" alt="sd"> -->
        </div>
        `
        parentDiv.appendChild(childDiv)
    })

}


let singleCard = id => {

    let url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => gotData(data));
    let gotData = data => {
        let { id, title, thumbnailUrl, url } = data
        let parentDiv = document.getElementById('photo');
        parentDiv.textContent ='';
        let childDiv = document.createElement('div');
        childDiv.innerHTML = `
    <div class="single">
        <p>${id}</p>
        <h3>${title}</h3>
        <img src="${thumbnailUrl}" alt="as">
    </div>
    `
        parentDiv.appendChild(childDiv)

    }
}














//10. the cocktail DB