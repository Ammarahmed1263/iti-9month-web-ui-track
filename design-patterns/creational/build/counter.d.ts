declare class Counter {
    private static instance;
    private activeCount;
    private constructor();
    static getInstance(): Counter;
    addInstance(): void;
    removeInstance(): void;
    getCount(): number;
}
export default Counter;
//# sourceMappingURL=counter.d.ts.map