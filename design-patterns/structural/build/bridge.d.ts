interface Device {
    increaseVolume(): void;
    decreaseVolume(): void;
    mute(): void;
}
declare class TV implements Device {
    private volume;
    increaseVolume(): void;
    decreaseVolume(): void;
    mute(): void;
}
declare class Speaker implements Device {
    private volume;
    increaseVolume(): void;
    decreaseVolume(): void;
    mute(): void;
}
declare class BasicRemoteControl {
    protected device: Device;
    /**
     * Bridge connection happens here.
     */
    constructor(device: Device);
    increaseVolume(): void;
    decreaseVolume(): void;
}
declare class AdvancedRemoteControl extends BasicRemoteControl {
    mute(): void;
}
export { TV, Speaker, BasicRemoteControl, AdvancedRemoteControl };
//# sourceMappingURL=bridge.d.ts.map