// search input

/* 1st url create kore function a pathalam */
document.getElementById('searchBtn').addEventListener('click', () => {
    let searchInput = document.getElementById('SearchArea');
    let inputValue = searchInput.value;
    //spinner added
    document.getElementById('spinner').classList.remove('d-none')
    if(inputValue.length > 0){

        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        displaySearchFood(url)
    }else{
        // console.log('empty')
        let parentDiv = document.getElementById('emptyValue');
        parentDiv.textContent = '';
        let childDiv = document.createElement('h1');
        childDiv.classList.add('p-5')
        childDiv.classList.add('bg-danger')
        childDiv.classList.add('text-center')
        childDiv.innerText = 'please put food name';
        parentDiv.appendChild(childDiv)
    }

})





let displaySearchFood = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => gotData(data))

    let gotData = (rcvData) => {
        //spinner remove
        document.getElementById('spinner').classList.add('d-none')
        //d-none error msg er div ta
        document.getElementById('emptyValue').classList.add('d-none')
        let parentDiv = document.getElementById('dispalyFood');
            // clear previous data
            parentDiv.textContent = '';
        rcvData.meals.forEach(el => {
            let { idMeal, strMeal, strMealThumb, strYoutube, strInstructions } = el
            let childDiv = document.createElement('div');
            childDiv.classList.add('col');
            childDiv.innerHTML = `
          <div class="card" onclick='singleCard(${idMeal})'>
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${strMeal}</h5>
              <p class="card-text">${strInstructions.slice(0, 100)}</p>
            </div>
          </div>
            `;
            parentDiv.appendChild(childDiv);
            // console.log(el)
        });

    }
}


//card a click korle new card a dekhabe
let singleCard = mealId => {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => gotData(data));

    let gotData = rcvData => {
        let { strInstructions, strMeal, strMealThumb } = rcvData.meals[0]
        console.log(rcvData.meals[0])
        let parentDiv = document.getElementById('singleCard');
        parentDiv.classList.add('card');
        //clear previous data
        parentDiv.textContent = '';
        //child data
        let childDiv = document.createElement('div');
        childDiv.innerHTML = `
        <img src="${strMealThumb}" class="card-img-top" alt="${strMeal}">
        <div class="card-body">
            <h3>${strMeal}</h3>
            <p class="card-text">${strInstructions.slice(0, 100)}</p>
        </div> `;
        parentDiv.appendChild(childDiv);


    }
}
