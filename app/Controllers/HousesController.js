import housesService from "../Services/HousesService.js";
import STORE from "../store.js";
//Private

function _drawHouses() {
  let houses = STORE.State.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('items').innerHTML = template
}

function _drawForm() {
  let template = `
              <div class="col">
                <form onsubmit="app.housesController.createHouse()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="builder">Builder</label>
                        <input type="text" name="builder" id="builder" class="form-control" placeholder="Builder...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="model">Model</label>
                        <input type="text" name="model" id="model" class="form-control" placeholder="Model...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="yearBuilt">Year Built</label>
                        <input type="number" name="yearBuilt" id="yearBuilt" class="form-control"
                            placeholder="Year Built..." min="1900" max="2021">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="number" name="price" id="price" class="form-control" placeholder="Price...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                            placeholder="Description...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="img">Image Url</label>
                        <input type="url" name="img" id="img" class="form-control" placeholder="Image Url...">
                    </div>
                    <button type="submit" class="btn btn-outline-success">List Home</button>
                </form>
            </div>
  `
  document.getElementById("form").innerHTML = template
}

//Public
export default class HousesController {

  constructor() {
    // _drawHouses()
  }
  createHouse() {
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
  removeHouse(id) {
    housesService.removeHouse(id)
    _drawHouses()
  }
  bid(id) {
    housesService.bid(id)
    _drawHouses()
  }

  drawHomesPage() {
    _drawForm()
    _drawHouses()
  }
}
