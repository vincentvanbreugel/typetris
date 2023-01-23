import musicFile from '../assets/audio/tetris-theme.mp3';
import rotateFile from '../assets/audio/rotate.mp3';
import moveFile from '../assets/audio/move.mp3';
import lockFile from '../assets/audio/lock.mp3';
import hardDropFile from '../assets/audio/hard-drop.mp3';
import gameOverFile from '../assets/audio/game-over.mp3';
import lineClearFile from '../assets/audio/line-clear.mp3';

export class AudioPlayer {
    sounds: { [key: string]: HTMLAudioElement } = {};

    constructor() {
        this.sounds.music = this.loadSound(musicFile, 0.8, true);
        this.sounds.rotate = this.loadSound(rotateFile, 1);
        this.sounds.move = this.loadSound(moveFile, 1);
        this.sounds.lock = this.loadSound(lockFile, 1);
        this.sounds.hardDrop = this.loadSound(hardDropFile, 1);
        this.sounds.gameOver = this.loadSound(gameOverFile, 1);
        this.sounds.lineClear = this.loadSound(lineClearFile, 1);
    }

    private loadSound(src: string, volume: number, loop = false): HTMLAudioElement {
        const sound = document.createElement('audio');
        sound.src = src;
        sound.volume = volume;
        sound.loop = loop;
        sound.style.display = 'none';
        sound.setAttribute('preload', 'auto');
        sound.setAttribute('type', 'audio/mp3');
        document.body.appendChild(sound);
        return sound;
    }

    play(sound: string): void {
        this.sounds[sound].pause();
        this.sounds[sound].currentTime = 0;
        this.sounds[sound].play();
    }

    pause(sound: string): void {
        this.sounds[sound].pause();
    }

    resume(sound: string): void {
        this.sounds[sound].play();
    }

    stop(sound: string): void {
        this.sounds[sound].pause();
        this.sounds[sound].currentTime = 0;
    }

    setVolume(sound: string, level: number) {
        this.sounds[sound].volume = level;
    }
}
