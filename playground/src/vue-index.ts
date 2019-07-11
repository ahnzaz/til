import CorePlayer from './CorePlayer';

const naver: any = {

};

naver.CorePlayer = CorePlayer;

(window as Window & { naver: any }).naver = naver;