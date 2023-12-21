interface Color {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorCircle = Color & Circle;

const cc: ColorCircle = {
  color: "red",
  radius: 50,
};

function draw(circle: ColorCircle) {
  console.log(circle.color, circle.radius);
}

draw(cc);
