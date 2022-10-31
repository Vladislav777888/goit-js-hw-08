import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const LOCAL_STORAGE_PLAY_TIME = 'videoplayer-current-time';

const lastPlayTime = localStorage.getItem(LOCAL_STORAGE_PLAY_TIME) ?? 0;

const player = new Player(iframe);

const updateTimePlay = throttle(function (data) {
  localStorage.setItem(LOCAL_STORAGE_PLAY_TIME, data.seconds);
}, 1000);

player.on('timeupdate', updateTimePlay);

player
  .setCurrentTime(lastPlayTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
