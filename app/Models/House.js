import { generateId } from "../utils.js";
export default class House {

  //Object Destructuring
  constructor(data) {
    this.id = generateId()
    this.builder = data.builder
    this.model = data.model
    this.yearBuilt = data.yearBuilt
    this.price = data.price
    this.img = data.img || "//placehold.it/200x200"
    this.description = data.description || "description unavailable"
  }

  get Template(){
    return `
    <div class="col-4">
    <div class="card">
        <img class="card-img-top" src="${this.img}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.builder} - ${this.model} - ${this.yearBuilt}</h4>
            <p class="card-text">${this.description}</p>
            <div class="d-flex justify-content-between">
                <button class="btn btn-outline-danger" onclick="app.carsController.removeCar('${this.id}')">Delete</button>
                <button class="btn btn-outline-info" onclick="app.carsController.bid('${this.id}')">+ $100</button>
                <p>$${this.price.toFixed(2)}</p>
            </div>
        </div>
    </div>
  </div>
    `
  }
}