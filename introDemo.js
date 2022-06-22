let harryAttack = 25;
let lordVAttack = 35;

if(harryAttack > lordVAttack){
    console.log("Harry has a better attack than Lord V");
} else if(lordVAttack > harryAttack){
    console.log("Lord V has has a better attack than Harry")
} else {
    console.log("Harry and Lord V have the same attack")
}

let harryHealth = 100;
let harryDefense = 0;

// Lord V attacks Harry 
console.log('Lord V attacks Harry ---> "Avra kadavra"')
if( harryHealth <= lordVAttack){
    console.log("Harry has been slain")
} else {
    harryHealth -= lordVAttack;
    console.log(`Harry's health is down ${harryHealth}`)
}

// Harry picks up a shield
harryDefense += 25;

if(harryHealth <=  (lordVAttack-harryDefense)){
    console.log("Harry has been slain!")
} else {
    harryHealth -= (lordVAttack - harryDefense)
    console.log(`Harry's health is down ${harryHealth}`)
}

// townsperson gives harry a shield

let healthKit = 50;

if((harryHealth + healthKit) >= 100){
    harryHealth = 100;
} else {
    harryHealth += healthKit;
}
console.log(`Harry got some help. Health is now ${harryHealth}`);

let coinTossHeads = false;

if(coinTossHeads !== false){
    console.log("The fight continues");
} else {
    console.log("harry is allowed to run away");
}

while(harryHealth > 0){
    harryHealth -= (lordVAttack - harryDefense)
    console.log(`Harry's health is ${harryHealth}`);

    if(harryHealth <= 0){
        console.log("Harry has been slain")
    }    
}

console.log("Godo job Harry")