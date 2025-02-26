
export const receptKiiras = (lista) => {
    let receptek = document.querySelectorAll('section')[0]
    console.log(receptek)
    for (let i = 0; i < lista.length; i++) {
        receptek.innerHTML += `
                    <div class="recept">
                    <img src=${lista[i].img} alt="">
                    <h3>${lista[i].nev}</h3>
                    <p><b>${lista[i].ido}</b> perc</p>
                    <p><b>${lista[i].adag}</b> adag</p>
                    <p>${lista[i].leiras}</p>
                    <button id="more"><a href="#">Olvass tovább...</a></button> </div>
                    `;
    }
}



export const receptBekuldes = (lista) => {
    const gomb = document.querySelector('#send')
    gomb.addEventListener('click', () => {

    const newRecept = {
        id: lista.length+1,
        img: '',
        nev: document.querySelector('#recipe_name').value,
        ido: document.querySelector('#recipe_time').value,
        adag: document.querySelector('#recipe_ammount').value,
        leiras: document.querySelector('#description').value
    }
    
    lista.push(newRecept)
    localStorage.setItem('receptLista', JSON.stringify(lista))
    console.log(newRecept)
    console.log(lista)
})
}

