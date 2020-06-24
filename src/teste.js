let container = document.querySelector('.container');
let status = document.querySelectorAll('.status-value');

const teste = html => {
    container.innerHTML += html;
}

axios.get('https://kctbh9vrtdwd.statuspage.io/api/v2/components.json')
.then(response => {
    let arrStatus = [];
    for(let i in response.data.components) {
        if(Number(i) === 3 || Number(i) === 8)
            continue;
        
        arrStatus.push(response.data.components[i].status);
    }

    for(let i in arrStatus)
        status[i].innerHTML = arrStatus[i];
});