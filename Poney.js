/**
 * Created by had on 25/03/17.
 */

class Poney {
    constructor(id, name, is_licorne, energy_jauge, being_used,deadpool) {
        this.is_licorne = is_licorne;
        this.energy_jauge = energy_jauge;
        this.being_used = being_used;
        this.id = id;
        this.name = name;
        this.dead = deadpool;

        console.log(this.name, 'a ete creer: id=', this.id, ' licorne? ', this.is_licorne, ' energy level=', this.energy_jauge);
    }

    transform_to_licorne() {
        this.dead.helpToTransform(this)
            .then(() => {
            if (this.is_licorne == false){
                this.is_licorne = true;
                    console.log('deadpool permet a ',this.name,'de devenir une licorne');
                }
            })
            .catch(() => {})
    }

    return_to_poney() {
        this.is_licorne = false;
        this.energy_jauge = 0;
        console.log(this.name, ' est redevenu un poney');
    }
    spiderman_attack(){
        this.being_used = true;
        console.log(this.name, 'est attaque par spiderman');
    }
    get_free(){
        this.being_used = false;
        this.return_to_poney();
        console.log('spiderman a fini de chevaucher '+ this.name);
    }
    recover_energy(night){
        if(this.being_used == true){
            console.log(this.name+" se fait chevaucher par spiderman")
        }
        else if(this.is_licorne){
            console.log(this.name,"boude en attendant deadpool")
        }
        else{
            if(night == true){
                this.energy_jauge += 2;
            }
            else{
                this.energy_jauge += 1;
            }

            console.log(this.name, 'recupere de l energie (pv:', this.energy_jauge,')');
        }
    }
}

module.exports = {Poney};