import { ICard } from "../interfaces/ICard.js";
import { SoundManager } from "./SoundManager.js";
import { ProgressBar } from "./ProgressBar.js";

export class GameEngine {
  private cards: ICard[];
  private soundManager: SoundManager;
  private progressBar: ProgressBar;
  private boardElement: HTMLElement;

  private flippedCards: ICard[] = [];
  private isLocked: boolean = false;
  private matchedCount: number = 0;
  private totalPairs: number;

  private hasInteracted: boolean = false;

  constructor(
    cards: ICard[],
    soundManager: SoundManager,
    progressBar: ProgressBar,
    boardElement: HTMLElement,
  ) {
    this.cards = cards;
    this.soundManager = soundManager;
    this.progressBar = progressBar;
    this.boardElement = boardElement;
    this.totalPairs = cards.length / 2;
  }

  start(): void {
    this.renderCards();
    this.cards.forEach((card) => this.bindCardClick(card));
  }

  private renderCards(): void {
    this.cards.forEach((card) => {
      this.boardElement.appendChild(card.element);
    });
  }

  private bindCardClick(card: ICard): void {
    card.element.addEventListener("click", () => {
      if (this.isLocked) return;
      if (card.isFlipped || card.isMatched) return;

      if (!this.hasInteracted) {
        this.soundManager.play("bgMusic", 20);
        this.hasInteracted = true;
      }

      this.soundManager.play("flip", 1);
      card.flip();
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        this.checkMatch();
      }
    });
  }

  private checkMatch(): void {
    const [first, second] = this.flippedCards;
    this.isLocked = true;

    if (first.pairId === second.pairId) {
      setTimeout(() => {
        first.match();
        second.match();
        this.soundManager.play("match");
        this.matchedCount++;
        this.progressBar.update(this.matchedCount);
        this.resetTurn();

        if (this.matchedCount === this.totalPairs) {
          this.gameOver();
        }
      }, 600);
    } else {
      setTimeout(() => {
        this.soundManager.play("mismatch");
        first.reset();
        second.reset();
        this.resetTurn();
      }, 1000);
    }
  }

  private resetTurn(): void {
    this.flippedCards = [];
    this.isLocked = false;
  }

  private gameOver(): void {
    this.soundManager.stop("bgMusic");
    this.soundManager.play("gameOver", 11);

    const overlay = document.getElementById("game-over")!;
    overlay.classList.remove("hidden");

    document
      .getElementById("restart-btn")!
      .addEventListener("click", () => this.restart());
  }

  private restart(): void {
    this.matchedCount = 0;
    this.flippedCards = [];
    this.isLocked = false;

    this.cards.forEach((card) => card.reset());
    this.progressBar.update(0);
    this.soundManager.play("bgMusic", 20);

    this.soundManager.stop("gameOver");
    document.getElementById("game-over")!.classList.add("hidden");
  }
}
