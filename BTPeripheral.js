class BTPeripheral extends Node {
    constructor(id, color, music, x, y) {
        super(id, x, y);
        this.color = color;
        this.music = music;
        this.size = 40;
        this.range = this.size + 85;
        this.getData(music, this);
    }

    getData(source, callback) {
        let dataReq = new XMLHttpRequest();
        dataReq.onreadystatechange = function () {
            if (dataReq.readyState === 4) {
                callback.dataProcessor(dataReq.response);
            }
        };

        dataReq.open("GET", source);
        dataReq.responseType = 'arraybuffer';
        dataReq.send();
    }

    dataProcessor(data) {
        let t = new ArrayBuffer(data.length * 2);
        // this.musicData = new Uint8Array(t);
        this.musicData = [];
        for (let i = 0; i < data.length; i++) {
            this.musicData[i] = data.charCodeAt(i);
        }
        console.log(this.musicData.length);
    }

    turnOnOff() {
        super.turnOnOff();
        if (this.state) {
            console.log(this.id + " playing");
            // this.music.loop();
        } else {
            console.log(this.id + " paused");
            // this.music.pause();
        }
    }

    connect(items) {
        if (this.state) {
            for (let item of items) {
                if (this.inRange(item) && item != this) {
                    if (item.constructor.name === "BTCentral") {
                        this._broadcast(item);
                    }
                }
            }
        }
    }

    inRange(item) {
        return dist(this.x, this.y, item.x, item.y) < (this.range / 2 + item.size / 2);
    }

    _broadcast(item) {
        item.data.push(this.color);
        item.musicData.push(this.musicData.splice(0, 1));
        // item.data.push(this.color);
    }


    show() {
        super.drag(this.size);
        fill(this.color);
        ellipse(this.x, this.y, this.size);
        noFill();
        ellipse(this.x, this.y, this.range);
    }
}