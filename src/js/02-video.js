import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (currentTime) {    
    const currentSecond = currentTime.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentSecond));
    };

player.on("timeupdate", throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0)