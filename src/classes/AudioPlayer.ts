export class AudioPlayer {
    track: HTMLAudioElement;
    rotate: HTMLAudioElement;
    move: HTMLAudioElement;
    lock: HTMLAudioElement;
    hardDrop: HTMLAudioElement;
    gameOver: HTMLAudioElement;

    constructor() {
        this.track = new Audio('../assets/audio/track.mp3');
        this.track.loop = true;
        this.rotate = new Audio('../assets/audio/rotate.mp3');
        this.move = new Audio('../assets/audio/move.mp3');
        this.lock = new Audio('../assets/audio/lock.mp3');
        this.hardDrop = new Audio('../assets/audio/hard-drop.mp3');
        this.gameOver = new Audio('../assets/audio/game-over.mp3');
    }
}
