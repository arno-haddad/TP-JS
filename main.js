/**
 * Created by had on 17/03/17.
 */

const {Poney,Spiderman,Deadpool,getRandomArbitrary}=require('./code');

var deadpool=new Deadpool(true,7,false);
var spiderman=new Spiderman(false);
var Ranch=new Array(poney0=new Poney(0,'chocolat',false,5,false),poney1=new Poney(1,'caramel',false,0,false),
    poney2=new Poney(2,'praline',true,0,false),poney3=new Poney(3,'noisette',false,0,false));

setInterval(function(){
    for (i=0;i<=3;i++){
        Ranch[i].recover_energy();
        Ranch[i].transform_to_licorne();
        deadpool.is_coming();
        if (Ranch[i].is_licorne == true){
            if (Ranch[i].being_used==false){
                if (deadpool.need_regeneration==true){
                    deadpool.recover_from_licorne(Ranch[i]);
                }
            }

        }
        deadpool.go_back();
    }
    deadpool.loose_energy();

},2000);

setInterval(function(){
    if (deadpool.is_here == false){
        var id=getRandomArbitrary(0,3);

        console.log(id);
        if (Ranch[id].is_licorne == true) {
            spiderman.ride_licorne(Ranch[id]);
        }
    }
},3500);

//comment
