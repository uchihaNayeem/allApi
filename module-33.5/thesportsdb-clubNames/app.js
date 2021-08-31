let inputValue = () => {
    let searchInput = document.getElementById('searchInput');
    let inputValue = searchInput.value;
    
    let singleURL = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`;
    fetchData(singleURL)
    
}


let fetchData = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => gotData(data.teams))
    .catch(error =>{
        console.log('link painai : ', error)
    });

    let parentDiv = document.getElementById('allTeam');
     parentDiv.textContent = '';
    let gotData = (data) =>{
        data.forEach(el => {
            let {strDescriptionEN, strTeamBadge, strTeam, idTeam  } =el
            // console.log(el);
            let childDiv = document.createElement('div');
            childDiv.classList.add('col')
            childDiv.innerHTML = `
            <div class="card" onclick="getSingleTeam(${idTeam})" >
                <img src="${strTeamBadge}" class="card-img-top" alt="${strTeam}">
                <div class="card-body">
                    <h5 class="card-title">${strTeam}</h5>
                    <p class="card-text">${strDescriptionEN.slice(0,200)}</p>
                </div>
            </div>
            `;
            parentDiv.appendChild(childDiv)
        });
    }
}


let getSingleTeam = (id) =>{
    let teamIdURL = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(teamIdURL)
    .then(res => res.json())
    .then(data => gotData(data.teams[0]))
    .catch(error =>{
        console.log('link painai : ', error)
    });
    let gotData = data =>{
        let parentDiv = document.getElementById('singleCard');
        parentDiv.classList.add('card');
        parentDiv.textContent = '';
        let childDiv = document.createElement('div');
        let {strTeam, strTeamBadge, strDescriptionEN } = data;
        childDiv.innerHTML =`
    <img src="${strTeamBadge}" class="card-img-top" alt="${strTeam}">
    <div class="card-body">
        <h5 class="card-title">${strTeam}</h5>
        <p class="card-text">${strDescriptionEN.slice(0,200)}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    parentDiv.appendChild(childDiv)

    }
}




