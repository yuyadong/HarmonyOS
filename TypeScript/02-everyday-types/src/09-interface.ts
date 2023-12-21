interface Point {
  x: number;
  y: number;
}

function pointCoods(pt: Point) {}

pointCoods({
  x: 3,
  y: 7,
});

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = {
  name: "winie",
  honey: true,
};

type Animals = {
  name: string;
};

type Bears = Animals & {
  honey: boolean;
};

const beara: Bears = {
  name: "linux",
  honey: true,
};

interface mywindow {
  count: number;
}

interface mywindow {
  title: string;
}

const w: mywindow = {
  title: "hello ts",
  count: 100
};
