export interface ICard {
  pairId: string;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
  element: HTMLElement;

  flip(): void;
  unFlip(): void;
  match(): void;
  reset(): void;
}
