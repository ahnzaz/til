import CorePlayer from './CorePlayer';

const naver: any = {

};

naver.CorePlayer = CorePlayer;

(window as Window & { naver: any }).naver = naver;

const video = document.querySelector('video');
video.volume = 0.1;
document.addEventListener('dblclick', ()=>{
    document.querySelector('video').volume = 1.0;
});

// video.attributes.crossorigin = "anonymous";

// const audioContext = new AudioContext();
// const videoNode = audioContext.createMediaElementSource(video);
// const gainNode = audioContext.createGain();

// videoNode.connect(gainNode);
// gainNode.connect(audioContext.destination);
// gainNode.gain.value = 5.0;