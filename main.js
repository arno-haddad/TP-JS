/**
 * Created by had on 17/03/17.
 */

console.log('salut!');
//-----------------------------------------Importations-----------------------------------------------------------
const {Poney}=require('./Poney');
const {Spiderman,getRandomArbitrary}=require('./Spiderman');
const {Deadpool}=require('./Deadpool');

//-----------------------------------Construction des objets et variables-----------------------------------------
var night=false; //Indique le jour ou la nuit
var tour=1;      //Indique le tour en cours
var deadpool_on = false;  //deadpool est'il deja ete cree?
var deadpool=new Deadpool(deadpool_on,7); //Deadpool et Spiderman
var spiderman=new Spiderman(false);
//----------------------------------Les Poneys sont élevés dans le vecteur Ranch------------------------------------
var Ranch=new Array(poney0=new Poney(0,'chocolat',false,5,false,deadpool),poney1=new Poney(1,'caramel',false,0,false,deadpool),
    poney2=new Poney(2,'praline',false,0,false,deadpool),poney3=new Poney(3,'noisette',false,0,false,deadpool));

//-------Premiers cycle sur les trois comprenant les activites de deadpool et les actions liées au temps--------------
setInterval(function(){
    console.log('');
    console.log('debut du cycle ',tour);
    console.log('');
/* Pour chaque Poney,deadpool regarde si une transformation est possible en fonction de l'energie de celui-ci
   Si le poney est une licorne deadpool recuperera de l'energie s'il en as besoin
   deadpool et les poneys perdent de l'energie a chaque tour (+- 1 de jour/+-2 de nuit)
 */
    for (i=0;i<=Ranch.length-1;i++){
        Ranch[i].transform_to_licorne();
        Ranch[i].recover_energy(night);
        deadpool.recover_if_needed(Ranch[i]);
    }
    deadpool.loose_energy(night);
    console.log('');
    tour++;
},1000);

//-----------------------------------Deuxieme cycle comprenant les actions de Spiderman---------------------

setInterval(function() {
/* Pour chaques cycle,un vecteur incluant les licornes actuelles est cree,Spiderman va alors choisir au hasard
   l'une d'elles et la chevauchee durant 2 tours du cycle de deadpool,une fois la licorne relachée elle redevient poney,
   s'il y a d'autres licornes durant ce meme tour,Spiderman recommencera.Spiderman ne peut chevaucher plusieurs poneys
   a la fois.
   */
    Licornes = Array();
    var n=0;
    for (j = 0; j <= Ranch.length-1; j++) {
        if (Ranch[j].is_licorne == true) {
            if (Ranch[j].being_used == true) {
                spiderman.realease_licorne(Ranch[j]);
            }
            else{
                Licornes[n]=Ranch[j];
                n++;
            }
        }
    }
    if(n!=0 && spiderman.using_licorne == false){
        var id=Math.floor(getRandomArbitrary(0,Licornes.length));
        //console.log(id,n);
        spiderman.ride_licorne(Licornes[id]);
    }
},2000);
//-----------------------------------Cycle Jour/Nuit--------------------------------------------
/* Survient tous les 6 tours du cycle Deadpool et intervertit le jour et la nuit qui influent sur la recuperation
   et perte d'energie
*/
setInterval(function() {
    image_night=night;
    if (image_night == false){
        night = true;
        console.log("-----------------------------------------------LA NUIT TOMBE----------------------------------");
    }
    if (image_night == true) {
        night = false;
        console.log("-----------------------------------------------LE JOUR SE LEVE----------------------------------");
    }
},6000);
//comment
module.exports = {night};