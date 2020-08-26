import STORE from "../store.js";
import House from "../Models/House.js";
//Public

class HousesService{
bid(id) {
  let house = STORE.State.houses.find(h=> h.id === id)
  house.price += 1000
}
removeHouse(id) {
  let houseIndex = STORE.State.houses.findIndex(h=>h.id === id)
  if (houseIndex === -1) {
    console.error("invalid id");
    return
  }
  STORE.State.houses.splice(houseIndex, 1)
}
createHouse(rawHouse) {
  let house = new House(rawHouse)
  STORE.State.houses.push(house)
}
}


const HOUSESSERVICE = new HousesService()

export default HOUSESSERVICE