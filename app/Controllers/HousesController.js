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
  createHouse(){
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      builder: form.builder.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      yearBuilt: form.yearBuilt.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    housesService.createHouse(rawHouse)
    _drawHouses()
  }
  removeHouse(id){
    housesService.removeHouse(id)
    _drawHouses()
  }
  bid(id){
    housesService.bid(id)
    _drawHouses()
  }
}
