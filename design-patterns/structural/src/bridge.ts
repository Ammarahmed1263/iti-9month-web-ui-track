interface Device {
  increaseVolume(): void;
  decreaseVolume(): void;
  mute(): void;
}

class TV implements Device {
  private volume: number = 10;

  increaseVolume(): void {
    this.volume++;
    console.log("TV volume increased to " + this.volume);
  }

  decreaseVolume(): void {
    this.volume--;
    console.log("TV volume decreased to " + this.volume);
  }

  mute(): void {
    this.volume = 0;
    console.log("TV muted");
  }
}

class Speaker implements Device {
  private volume: number = 50;

  increaseVolume(): void {
    this.volume += 5;
    console.log("Speaker volume increased to " + this.volume);
  }

  decreaseVolume(): void {
    this.volume -= 5;
    console.log("Speaker volume decreased to " + this.volume);
  }

  mute(): void {
    this.volume = 0;
    console.log("Speaker muted");
  }
}

class BasicRemoteControl {
  /**
   * Bridge connection happens here.
   */
  constructor(protected device: Device) {}

  increaseVolume(): void {
    this.device.increaseVolume();
  }

  decreaseVolume(): void {
    this.device.decreaseVolume();
  }
}

class AdvancedRemoteControl extends BasicRemoteControl {

  mute(): void {
    this.device.mute();
  }
}

export { TV, Speaker, BasicRemoteControl, AdvancedRemoteControl };