import jobsService from "../Services/JobsService.js"
import STORE from "../store.js"

function _drawJobs(){
  let jobs = STORE.State.jobs
  let template = ''
  jobs.forEach(j=> template += j.Template)
  document.getElementById('jobs').innerHTML = template
}
export default class JobsController{
  constructor(){
    _drawJobs()
  }
}