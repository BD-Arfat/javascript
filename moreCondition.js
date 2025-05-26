// moreCondition

const salary = 70000;
const bcs = true;
// if(salary < 80000){
//     console.log('amu tumare biya kormu')
// }
// else{
//     console.log('mama rasta mapen tara tari, ja to vai')
// };

// if(salary > 1000000 && bcs == true){
//     console.log('ei tara tari asho and bi ya kore pele amake')
// } else{
//     console.log('next 5 bochor apni single takben')
// }

// if(salary > 45000 || bcs == false){
//     console.log('ami biya kormu tura pula')
// } else{
//     console.log('more geleo o to tuke biya kormu na ami')
// }

const age = 19;
const height = 62;

if(age > 18 && height > 60){
    console.log('tumi to garite boshe takbe')
}
else{
    console.log('apni khali gadar moto katben je bujte parchen mama')
}

const money = 1000;
const popcornPrice = 140;

if(money >= 300){
    console.log('tumi sinema dekhte jaite parbe oke');
    if(popcornPrice >=50){
        console.log('ami popkhon khabo mama')
    } else{
        console.log('ami khabo na mama')
    }

}
else{
    console.log('tumi ghore boshe tako shuna')
}

const love = false;
if(love == true){
    console.log('i love you jan')
}
if(love){
    console.log('cholo viye kore peli amra')
}

if(!love){
    console.log('amu ture biya kormu na beta')
}

const age2 = 20;

if(age2 >= 20){
    console.log('vute for the hot')
} else{
    console.log('you are not eligible to vote')
}

age >= 10 ? console.log('tumi vut dite parbe') : console.log('tumi vut dite parbe na oke')

let price = 500;
let isLeader = true;
price = isLeader == true?console.log('apnar konu taka lagbe naoke') : price + 100;

const cashback = 4000;
cashback >= 3000 ? console.log(500) : console.log('apni konu taka beck paben na sorry')