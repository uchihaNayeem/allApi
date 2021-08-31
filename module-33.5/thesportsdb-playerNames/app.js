
//input value capture kore url ready korsi
let inputValue = () => {
    let searchInput = document.getElementById('searchInput');
    let inputValue = searchInput.value;
    if (inputValue.includes(' ')) {
        console.log('space ase', inputValue);
        let R = /(\w|\s)*\w(?=")|\w+/g;
        let output = inputValue.match(R);
        let myValue = `${output[0]}%20${output[1]}`
        let dualURL = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${myValue}`
        fetchUrlDualName(dualURL)
    } else {
        console.log('space nai', inputValue);
        let singleURL = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${inputValue}`;
        fetchUrlSingleName(singleURL)
    }
}

// dui part wala nam
let fetchUrlDualName =  url =>{
    fetch(url)
    .then(res => res.json())
    .then(data => gotData(data.player[0]))
    .catch(error =>{
        console.log('link painai dual name: ', error)
    });

    let parentCard = document.getElementById('playerCard')
    parentCard.classList.add('card');
    parentCard.textContent =""
    let gotData = (data) =>{
        console.log(data)
        let {idPlayer, strPlayer, strThumb, strDescriptionEN   } = data
        let childCard = document.createElement('div');
        childCard.innerHTML =`
        <img src="${strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${strPlayer}</h5>
            <p class="card-text">${strDescriptionEN.slice(0,200)}</p>
            
        </div>
        `;
        parentCard.appendChild(childCard)
    }
}


//single part nam

let fetchUrlSingleName = url =>{
    //single card remove
    let parentCard = document.getElementById('playerCard');
    parentCard.textContent = '';

    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => gotData(data.player))
    .catch(error =>{
        console.log('link painai single name: ', error)
    });

    //multiple card and data inject korbo
    let multiParent = document.getElementById('multiplepPlayer')
    multiParent.textContent ='';
    let gotData = data =>{
        data.forEach(el=>{
            let {idPlayer, strPlayer, strThumb, strDescriptionEN } = el
            console.log(strPlayer, strThumb)
    
    let childCard = document.createElement('div');
    childCard.classList.add('card');
    childCard.innerHTML =`
    <img src="${strThumb}" class="card-img-top" alt="${strPlayer}">
    <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">${strDescriptionEN.slice(0,200)}</p>
    </div>
    `;
    multiParent.appendChild(childCard);


    
        })
    }

}



/*             <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div> 
*/