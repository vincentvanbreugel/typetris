import trackFile from '../assets/audio/track.mp3';
import rotateFile from '../assets/audio/rotate.mp3';
import moveFile from '../assets/audio/move.mp3'
import lockFile from '../assets/audio/lock.mp3'
import hardDropFile from '../assets/audio/hard-drop.mp3'
import gameOverFile from '../assets/audio/game-over.mp3'

export class AudioPlayer {
    track: HTMLAudioElement;
    rotate: HTMLAudioElement;
    move: HTMLAudioElement;
    lock: HTMLAudioElement;
    hardDrop: HTMLAudioElement;
    gameOver: HTMLAudioElement;

    constructor() {
        this.track = this.loadSound(trackFile, true);
        this.rotate = this.loadSound(rotateFile);
        this.move = this.loadSound(moveFile);
        this.lock = this.loadSound(lockFile);
        this.hardDrop = this.loadSound(hardDropFile);
        this.gameOver = this.loadSound(gameOverFile);
    }

    private loadSound(src: string, loop = false) {
        const sound = document.createElement('audio');
        sound.src = src;
        sound.setAttribute('preload', 'auto');
        sound.setAttribute('controls', 'none');
        sound.setAttribute('type', 'audio/mp3');
        sound.loop = loop;
        sound.style.display = 'none';
        document.body.appendChild(sound);
        return sound;
    }
}
