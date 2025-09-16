import {addDots} from "./utils";
import IGenre from "./interface/steamish/IGenre";

let test:string = addDots('allo');

fetch('https://steam-ish.test-02.drosalys.net/api/genre')
    .then((response) => {
        return response.json()
    }).then((data: Array<IGenre>) => {

})