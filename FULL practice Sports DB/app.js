let searchInput = () =>{
    let searchInput = document.getElementById('searchInput');
    let searchValue = searchInput.value;
    if(searchValue.length >0){
        let url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`
        document.getElementById('searchInput').value = '';
        multipleCard(url);
    }else{
        console.log('empty search')
    }
}


let multipleCard =(url) =>{

    fetch(url)
    .then(req => req.json())
    .then(data => gotData(data.teams))
    .catch(error =>{
        console.log('multiple URL problem: ', error)
    })
    let gotData= data =>{
        let parentDiv = document.getElementById('multipleCard');
        parentDiv.textContent = ''
        data.forEach(el => {
            let {idTeam, strDescriptionEN, strTeamBadge, strTeam } =el;
            let childDiv = document.createElement('div');
            childDiv.classList.add('col')
            childDiv.innerHTML =`
            <div class="card m-3" onclick="singleCard(${idTeam})">
                    <img src="${strTeamBadge}" class="card-img-top" alt="${strTeam}">
        <!--         
                   <div class="card-body">
                        <h5 class="card-title">${strTeam}</h5>
                        <p class="card-text">${strDescriptionEN.slice(0,100)}</p>
                    </div>
                     -->
                </div>
            `;
            parentDiv.appendChild(childDiv)
        });//end forEach
    }//gotData end
}// multipleCard end



let singleCard = (id) =>{
    let singleURL = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
    fetch(singleURL)
    .then(req => req.json())
    .then(data => gotData(data.teams[0]))
    .catch(error =>{
        console.log('single URL problem: ', error)
    })

    let gotData = (data)=>{
        let {strDescriptionEN, strTeamBadge, strTeam} = data
        let parentDiv = document.getElementById('singleCard');
        parentDiv.textContent =''
        parentDiv.classList.add('card');
        let childDiv = document.createElement('div')
        childDiv.innerHTML =`
        <img src="${strTeamBadge}" class="card-img-top" alt="${strTeam}">
        <div class="card-body">
            <h5 class="card-title">${strTeam}</h5>
            <p class="card-text">${strDescriptionEN.slice(0,150)}</p>
        </div>
        `;
        parentDiv.appendChild(childDiv)
    }
}


/* 
<img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
*/























/* ============================ testing area =================*/



function fetching(url, gotData){
    fetch(url)
    .then(req => req.json())
    .then(data => {
        gotData(data)
    } )
}

function testing(data){
    let myData = fetching(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=olo`,testing);
    console.log(myData, data)
}



function testingOne(data){
    let myData = fetching(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=olo`,testing);
    console.log(myData, data)
}





/* function fetching(url){
    let myData ;
    fetch(url)
    .then(req => req.json())
    .then(data => {
        myData = data
    } )
    console.log(myData)
}




function testing(data){
    let myData = fetching(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=olo`);
    console.log(myData, data)
}



function testingOne(data){
    let myData = fetching(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=olo`,testing);
    console.log(myData, data)
}

 */