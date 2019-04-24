class BTCentral extends Node {
    constructor(id, x, y, elt) {
        super(id, x, y);
        this.data = [];
        this.musicData = [];
        this.music = new Uint8Array(250000);
        this.size = 60;
        this.elt = elt;
        this.ready = false;
    }

    isReceivingData() {
        if (this.musicData.length > 1000) {
            this.ready = true;
        } else {
            console.log(this.musicData.length);
            this.ready = false;
        }
    }

    playMusic() {
        if (this.ready == true) {
            for (let i = 0; i < this.musicData.length; i++) {
                this.music[i] = this.musicData[i];
            }
            this.musicData = [];

            let mediaSource = new MediaSource();
            mediaSource.

            console.log(this.elt);
        }
    }

    displayData() {
        let t = this.data.splice(0, 1);
        return t.length == 1 ? t : "#ddd";
    }

    turnOnOff() {
        super.turnOnOff();
        this.data.length = 0;
    }

    show() {
        super.drag(this.size);
        this.isReceivingData();
        // console.log(this.musicData);
        this.playMusic();
        fill(this.displayData());
        ellipse(this.x, this.y, this.size);
    }
}