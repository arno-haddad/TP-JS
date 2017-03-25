/**
 * Created by had on 25/03/17.
 */
class Spiderman {
    constructor(using_licorne) {
        this.using_licorne = using_licorne;
        console.log('Spiderman arrive');

    }

    ride_licorne(poney) {

        poney.spiderman_attack();
        this.using_licorne=true;
    }
    realease_licorne(poney){
        poney.get_free();
        this.using_licorne = false;
    }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
module.exports = {Spiderman, getRandomArbitrary};