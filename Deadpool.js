/**
 * Created by had on 25/03/17.
 */

class Deadpool {
    constructor(deadpool_on, energy_jauge,night) {

        if (deadpool_on == false){
            this.energy_jauge = energy_jauge;
            deadpool_on =true;

            console.log('Deadpool  arrive');
        }
        else {
            console.log('Deadpool continue son elevage');
        }



    }

    recover_if_needed(poney) {

        if (poney.is_licorne == true){
            if (poney.being_used==false){
                if (this.energy_jauge<=5){
                    this.energy_jauge = 20;
                    console.log('Deadpool se restaure avec ', poney.name);
                    poney.return_to_poney();
                }
            }
        }



    }

    is_coming() {
        this.is_here = true;
        console.log('Deadpool arrive');
    }

    go_back() {
        this.is_here = false;
        console.log('Deadpool va aux toilettes');
    }

    loose_energy(night) {
        if(night == true){
            this.energy_jauge -= 2;
        }
        else{
            this.energy_jauge -= 1;
        }
        console.log('Deadpool a perdu de l energie (pv:', this.energy_jauge,')');
    }

    helpToTransform(poney) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < (poney.energy_jauge / 10)) {
                    resolve();
                } else {
                    reject();
                }
            }, 1000);
        });
    }




}

module.exports={Deadpool};