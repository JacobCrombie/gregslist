import housesService from "../Services/HousesService.js";
import STORE from "../store.js";
//Private

function _drawHouses(){
  let houses = STORE.State.houses
  let template = ''
  houses.forEach(h=> template += h.Template)
  document.getElementById('houses').innerHTML = template
}

//Public
export default class HousesController{

  constructor(){
_drawHouses()
  }
}
