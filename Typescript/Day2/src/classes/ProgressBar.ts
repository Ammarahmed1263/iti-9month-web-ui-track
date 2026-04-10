export class ProgressBar {
  private fillElement: HTMLElement;
  private labelElement: HTMLElement;
  private totalPairs: number;

  constructor(fillId: string, labelId: string, totalPairs: number) {
    this.fillElement = document.querySelector(fillId) as HTMLElement;
    this.labelElement = document.querySelector(labelId) as HTMLElement;
    this.totalPairs = totalPairs;

    this.reset();
  }

  update(currentMatches: number): void {
    const percentage = (currentMatches / this.totalPairs) * 100;
    this.fillElement.style.width = `${percentage}%`;

    this.labelElement.textContent = `${currentMatches}/${this.totalPairs}`;
  }

  reset(): void {
    this.fillElement.style.width = "0%";
    this.labelElement.textContent = `0/${this.totalPairs}`;
  }
}
