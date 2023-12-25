interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("Ping!");
  }
}

class Ball implements Pingable {
  pong() {}
  ping() {}
}

interface A {
  funcA(): void;
}

interface B {
  funcB(): void;
}

class CC implements A, B {
  funcA() {}
  funcB() {}
}

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: string) {
    return s.toUpperCase() == "ok";
  }
}
