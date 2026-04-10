import { Card } from "./Card.js";
import { IGameConfig } from "../interfaces/IGameConfig.js";

export class CardFactory {
  constructor(private config: IGameConfig) {}

  createCards(): Card[] {
    const cards: Card[] = [];

    for (let i = 0; i < this.config.totalPairs; i++) {
      const pairId = `pair-${i}`;
      const imageUrl = this.config.images[i];

      cards.push(new Card(pairId, imageUrl));
      cards.push(new Card(pairId, imageUrl));
    }

    return this.shuffle(cards);
  }

  private shuffle(cards: Card[]): Card[] {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
}
