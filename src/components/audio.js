import cardFlip from "../assets/audio/card-flip.mp3";
import cardFlipBack from "../assets/audio/card-flip-back.mp3";
import countDown from "../assets/audio/countdown.wav";

let sounds = {};
sounds.flip = new Audio(cardFlip);
sounds.flipBack = new Audio(cardFlipBack);
sounds.countdown = new Audio(countDown);

export let play = sound => {
  if (sounds[sound]) {
    sounds[sound].currentTime = 0;
    sounds[sound].play();
  }
};

export let stop = sound => {
  if (sounds[sound]) {
    sounds[sound].pause();
  }
};
