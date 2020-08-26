import { generateId } from "../utils.js";

export default class Job{

  constructor(data) {
    this.id = generateId()
    this.company = data.company
    this.position = data.position
    this.dateAvailable = data.dateAvailable
    this.payrate = data.payrate
    this.img = data.img || "//placehold.it/200x200"
    this.description = data.description || "description unavailable"
  }

  get Template() {
return `
<div class="col-4">
<div class="card">
    <img class="card-img-top" src="${this.img}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.company} - ${this.position} - ${this.dateAvailable}</h4>
        <p class="card-text">${this.description}</p>
        <div class="d-flex justify-content-between">
            <button class="btn btn-outline-danger" onclick="app.jobsController.removeCar('${this.id}')">Delete</button>
            <button class="btn btn-outline-info" onclick="app.jobsController.apply('${this.id}')">Apply</button>
            <p>$${this.payrate}</p>
        </div>
    </div>
</div>
</div>
`
  }
}