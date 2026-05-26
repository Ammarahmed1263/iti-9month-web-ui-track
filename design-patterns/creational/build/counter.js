class Counter {
    static instance;
    activeCount = 0;
    constructor() { }
    static getInstance() {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }
    addInstance() {
        this.activeCount++;
    }
    removeInstance() {
        if (this.activeCount > 0)
            this.activeCount--;
    }
    getCount() {
        return this.activeCount;
    }
}
export default Counter;
//# sourceMappingURL=counter.js.map