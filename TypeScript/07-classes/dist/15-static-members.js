"use strict";
class MyClassx {
    static printX() {
        console.log(MyClassx.x);
    }
}
MyClassx.x = 0;
console.log(MyClassx.x);
MyClassx.printX();
