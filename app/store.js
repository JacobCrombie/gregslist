import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Job.js";
console.log(1);

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  houses: [
    new House({ builder: "Janky Homes", model: "Send It", yearBuilt: 1998, price: 39998.63, description: "It'll work, no warranty available. ALL SALES ARE FINAL" }),
    new House({ builder: "2 Many Fancy", model: "Envy", yearBuilt: 2020, price: 9999999.99, description: "Trade ins available 6months after movein date for half the value of the house keep up with your neighbors", img: "//placehold.it/200x200" }),
    new House({ builder: "Average Build", model: "Meh", yearBuilt: 2005, price: 100000.00, description: "It's an average home with average neighbors in average neighborhood" })
  ],
  jobs: [
    new Job({company: "Big League Chew", position:"Lead Chewer", dateAvailable: 2000, payrate: 20, description: "Need a strong jaw that can chew 8hrs a day and managed jr chewers"}),
    new Job({company: "Crushed Ice Inc", position:"Ice Crusher", dateAvailable: 2000, payrate: 18, description: "Need a dedicated individual to crush cubed ice on a wholesale level"}),
    new Job({company: "Paint Dryers Inc", position:"Drying Supervisor", dateAvailable: 2000, payrate: 36, description: "Seeking a attentive individual to supervise the paint and make sure it drys at the standard rate"})
  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
