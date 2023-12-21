type Fishs = {
  name: string;
  swim: () => void;
};

type Birds = {
  name: string;
  fly: () => void;
};

function isFish(pet: Fishs | Birds): pet is Fishs {
  return (pet as Fishs).swim != undefined;
}

function getSmallPet(): Fishs | Birds {
  let fish: Fishs = {
    name: "sharkey",
    swim: () => {},
  };

  let bird: Birds = {
    name: "sparrow",
    fly: () => {},
  };

  return true ? bird : fish;
}

let pet = getSmallPet();
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// const zoo: Fishs | Birds = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fishs[] = zoo.filter(isFish);
