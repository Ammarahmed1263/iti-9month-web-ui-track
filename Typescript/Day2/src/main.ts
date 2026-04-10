import { IGameConfig } from "./interfaces/IGameConfig.js";
import { CardFactory } from "./classes/CardFactory.js";
import { SoundManager } from "./classes/SoundManager.js";
import { ProgressBar } from "./classes/ProgressBar.js";
import { GameEngine } from "./classes/GameEngine.js";

const config: IGameConfig = {
  totalPairs: 9,
  images: [
    "assets/images/ironman.jpg",
    "assets/images/black-panther.jpg",
    "assets/images/black-widow.jpg",
    "assets/images/captain-america.jpg",
    "assets/images/captain-marvel.jpg",
    "assets/images/hawkeye.jpg",
    "assets/images/hulk.jpg",
    "assets/images/spiderman.jpg",
    "assets/images/thor.jpg",
  ],
};

const factory = new CardFactory(config);
const cards = factory.createCards();
const soundManager = new SoundManager({
  bgMusic: "assets/sounds/bg-music.mp3",
  flip: "assets/sounds/flip.mp3",
  match: "assets/sounds/match.mp3",
  mismatch: "assets/sounds/misMatch.mp3",
  gameOver: "assets/sounds/game-over_louder_150.mp3",
});
const progressBar = new ProgressBar(
  ".progress-bar-fill",
  ".progress-label",
  config.totalPairs,
);
const boardElement = document.getElementById("game-board") as HTMLElement;

const game = new GameEngine(cards, soundManager, progressBar, boardElement);
game.start();
