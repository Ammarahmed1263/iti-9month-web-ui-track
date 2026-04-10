export class Card {
    pairId;
    imageUrl;
    isFlipped = false;
    isMatched = false;
    element;
    constructor(pairId, imageUrl) {
        this.pairId = pairId;
        this.imageUrl = imageUrl;
        this.element = this.createCardElement();
    }
    createCardElement() {
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
    flip() {
        if (this.isFlipped || this.isMatched)
            return;
        this.isFlipped = true;
        this.element.classList.add("is-flipped");
    }
    unFlip() {
        this.isFlipped = false;
        this.element.classList.remove("is-flipped");
    }
    match() {
        this.isMatched = true;
        this.element.classList.add("is-matched");
    }
    reset() {
        this.isFlipped = false;
        this.isMatched = false;
        this.element.classList.remove("is-flipped");
        this.element.classList.remove("is-matched");
    }
}
