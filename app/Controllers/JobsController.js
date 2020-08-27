import jobsService from "../Services/JobsService.js"
import STORE from "../store.js"

function _drawJobs() {
  let jobs = STORE.State.jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('items').innerHTML = template
}

function _drawForm() {
  let template = `
              <div class="col">
                <form onsubmit="app.jobController.createJob()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="company">Company</label>
                        <input type="text" name="company" id="company" class="form-control" placeholder="Company...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="position">Position</label>
                        <input type="text" name="position" id="position" class="form-control" placeholder="Position...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="dateAvailable">Date Available</label>
                        <input type="number" name="dateAvailable" id="dateAvailable" class="form-control"
                            placeholder="Date Available..." min="1900" max="2021">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="payrate">Pay Rate</label>
                        <input type="number" name="payrate" id="payrate" class="form-control" placeholder="Pay Rate...">
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
                    <button type="submit" class="btn btn-outline-success">List Job</button>
                </form>
            </div>
  `
  document.getElementById("form").innerHTML = template
}
export default class JobsController {
  constructor() {
    // _drawJobs()
  }

  drawJobsPage() {
    _drawJobs()
    _drawForm()
  }
}