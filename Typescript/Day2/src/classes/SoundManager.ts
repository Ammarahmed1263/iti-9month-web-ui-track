import { ISoundConfig } from "../interfaces/ISoundConfig";

export class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();

  constructor(config: ISoundConfig) {
    for (const [name, path] of Object.entries(config)) {
      const audio = new Audio(path);

      audio.volume = 0.7;
      if (name === "bgMusic") {
        audio.loop = true;
        audio.volume = 0.4;
        audio.currentTime = 70;
      }

      if (name === "gameOver" || name === "match") {
        audio.volume = 1;
      }

      this.sounds.set(name, audio);
    }
  }

  play(name: string, fromTime: number = 0): void {
    const audio = this.sounds.get(name);

    if (!audio) {
      console.warn(`Sound key "${name}" not found in SoundManager.`);
      return;
    }

    audio.currentTime = fromTime;

    audio.play().catch((err) => {
      console.warn(`Couldn't play ${name}: `, err);
    });
  }

  stop(name: string): void {
    const audio = this.sounds.get(name);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }
}
