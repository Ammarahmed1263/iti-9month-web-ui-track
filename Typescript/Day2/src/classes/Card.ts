import { ICard } from "../interfaces/ICard";

export class Card implements ICard {
  isFlipped: boolean = false;
  isMatched: boolean = false;
  element: HTMLElement;

  constructor(
    public pairId: string,
    public imageUrl: string,
  ) {
    this.element = this.createCardElement();
  }

  private createCardElement(): HTMLElement {
    const card = document.createElement("section");
    card.classList.add("card");
    card.dataset.pairId = this.pairId;

    card.innerHTML = `
      <div class="card__inner">
        <div class="card__face card__face--front">
          <img src="assets/images/card_back.jpg" alt="Card Logo" class="card-image" />
        </div>

        <div class="card__face card__face--back">
          <img src="${this.imageUrl}" alt="Marvel Character" class="card-image" />
        </div>
      </div>
    `;

    return card;
  }

  flip(): void {
    if (this.isFlipped || this.isMatched) return;

    this.isFlipped = true;
    this.element.classList.add("is-flipped");
  }

  unFlip(): void {
    this.isFlipped = false;
    this.element.classList.remove("is-flipped");
  }

  match(): void {
    this.isMatched = true;
    this.element.classList.add("is-matched");
  }

  reset(): void {
    this.isFlipped = false;
    this.isMatched = false;
    this.element.classList.remove("is-flipped");
    this.element.classList.remove("is-matched");
  }
}
