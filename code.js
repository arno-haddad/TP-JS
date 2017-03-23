/**
 * Created by had on 17/03/17.
 */

/*(function () {
var alert;
function initialize_page() {
    alert('helloworld');
}
addEventListener('load',initialize_page);
})();
*/

console.log('salut!');
 class Poney {
    constructor(id,name,is_licorne,energy_jauge,being_used) {
        this.is_licorne = is_licorne;
        this.energy_jauge = energy_jauge;
        this.being_used = being_used;
        this.id = id;
        this.name = name;
        console.log(this.name,'a ete creer: id=', this.id, ' licorne? ', this.is_licorne, ' energy level=', this.energy_jauge);
    }
    transform_to_licorne() {
        if (this.energy_jauge == 10){
            this.is_licorne = true;
            console.log(this.name,'est devenu une licorne');
        }
    }
     return_to_poney() {

         this.is_licorne = false;
         this.energy_jauge=0;
         console.log(this.name,'est redevenu un poney');
     }
     spiderman_attack() {
        if (this.is_licorne = true){
            this.being_used=true;
            this.energy_jauge=0;
            console.log(this.name,'est attaque par spiderman');
        }
     }
     recover_energy(){
        this.energy_jauge += 1;
         console.log(this.name,'recupere 1pv       pv:',this.energy_jauge);
     }
    }
class Deadpool {
    constructor(need_regeneration,energy_jauge,is_here) {
        this.need_regeneration = need_regeneration;
        this.energy_jauge = energy_jauge;
        this.is_here = is_here;
        console.log('Deadpool commence son elevage');
    }
    recover_from_licorne(poney){

        if (poney.is_licorne == true){
            this.energy_jauge=10;
            console.log('Deadpool a absorbe l energie de ',poney.name );
            poney.return_to_poney();

        }
    }
    is_coming(){
        this.is_here = true;
        console.log('Deadpool arrive');
    }
    go_back(){
        this.is_here = false;
        console.log('Deadpool va aux toilettes');
    }
    loose_energy(){
        this.energy_jauge -= 1;
        console.log('Deadpool a perdu de 1 pv       pv:',this.energy_jauge );
    }

}
class Spiderman {
    constructor(using_licorne) {
        this.using_licorne = using_licorne;
        console.log('Spiderman arrive');

    }
    ride_licorne(poney){

        poney.spiderman_attack();
    }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
module.exports={Poney,Spiderman,Deadpool,getRandomArbitrary};