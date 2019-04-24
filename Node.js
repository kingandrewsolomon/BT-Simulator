class Node {
    constructor(id, x, y) {
        this.id = id;
        this.x = x ? x : Math.random() * 100;
        this.y = y ? y : Math.random() * 100;
        this.state = false;
    }

    turnOnOff() {
        this.state = !this.state;
    }

    drag(size) {
        if (dist(this.x, this.y, mouseX, mouseY) < size / 2 && mouseIsPressed) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    connect() {}


    show() {
        fill("WHITE");
        square(this.x, this.y, 30);
    }
}