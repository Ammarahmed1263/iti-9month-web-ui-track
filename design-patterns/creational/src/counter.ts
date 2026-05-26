class Counter {
  private static instance: Counter;
  private activeCount: number = 0;

  private constructor() {}

  public static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }

    return Counter.instance;
  }

  public addInstance(): void {
    this.activeCount++;
  }

  public removeInstance(): void {
    if (this.activeCount > 0) this.activeCount--;
  }

  public getCount(): number {
    return this.activeCount;
  }
}

export default Counter;
