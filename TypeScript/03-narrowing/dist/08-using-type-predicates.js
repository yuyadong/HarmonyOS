"use strict";
function isFish(pet) {
    return pet.swim != undefined;
}
function getSmallPet() {
    let fish = {
        name: "sharkey",
        swim: () => { },
    };
    let bird = {
        name: "sparrow",
        fly: () => { },
    };
    return true ? bird : fish;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// const zoo: Fishs | Birds = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fishs[] = zoo.filter(isFish);
