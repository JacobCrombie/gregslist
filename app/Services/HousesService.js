import STORE from "../store.js";
import House from "../Models/House.js";
//Public

class HousesService{
serviceCheck(){
  console.log("house service check");
  let y = STORE
  console.log(y);
  console.log(new House);
}
}


const HOUSESSERVICE = new HousesService()

export default HOUSESSERVICE