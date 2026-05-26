class TV {
    volume = 10;
    increaseVolume() {
        this.volume++;
        console.log("TV volume increased to " + this.volume);
    }
    decreaseVolume() {
        this.volume--;
        console.log("TV volume decreased to " + this.volume);
    }
    mute() {
        this.volume = 0;
        console.log("TV muted");
    }
}
class Speaker {
    volume = 50;
    increaseVolume() {
        this.volume += 5;
        console.log("Speaker volume increased to " + this.volume);
    }
    decreaseVolume() {
        this.volume -= 5;
        console.log("Speaker volume decreased to " + this.volume);
    }
    mute() {
        this.volume = 0;
        console.log("Speaker muted");
    }
}
class BasicRemoteControl {
    device;
    /**
     * Bridge connection happens here.
     */
    constructor(device) {
        this.device = device;
    }
    increaseVolume() {
        this.device.increaseVolume();
    }
    decreaseVolume() {
        this.device.decreaseVolume();
    }
}
class AdvancedRemoteControl extends BasicRemoteControl {
    mute() {
        this.device.mute();
    }
}
export { TV, Speaker, BasicRemoteControl, AdvancedRemoteControl };
//# sourceMappingURL=bridge.js.map