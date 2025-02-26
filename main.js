import { receptKiiras } from "./fuggvenyek.js";
import { receptLista } from "./adat.js";


let receptLista2 = JSON.parse(localStorage.getItem('receptLista'))
console.log(receptLista2)

if (receptLista2 == null) {
    receptKiiras(receptLista)
} else {
    receptKiiras(receptLista2)
    console.log('asdsa')
}