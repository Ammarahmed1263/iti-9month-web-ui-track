export class ProgressBar {
    fillElement;
    labelElement;
    totalPairs;
    constructor(fillId, labelId, totalPairs) {
        this.fillElement = document.querySelector(fillId);
        this.labelElement = document.querySelector(labelId);
        this.totalPairs = totalPairs;
        this.reset();
    }
    update(currentMatches) {
        const percentage = (currentMatches / this.totalPairs) * 100;
        this.fillElement.style.width = `${percentage}%`;
        this.labelElement.textContent = `${currentMatches}/${this.totalPairs}`;
    }
    reset() {
        this.fillElement.style.width = "0%";
        this.labelElement.textContent = `0/${this.totalPairs}`;
    }
}
