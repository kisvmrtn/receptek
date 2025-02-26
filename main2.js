import { receptLista } from "./adat.js"
import { receptBekuldes } from "./fuggvenyek.js"

let receptLista2 = JSON.parse(localStorage.getItem('receptLista'))
console.log(receptLista2)

if (receptLista2 = 'null') {
    receptBekuldes(receptLista)
} else {
    receptBekuldes(receptLista2)
}
