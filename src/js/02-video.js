import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStKey = 'videoplayer-current-time';
function stopPlayerTime({ seconds }) {
  localStorage.setItem(localStKey, seconds);
}
function getPlayerTime() {
  return localStorage.getItem(localStKey) || 0;
}
player.on('timeupdate', throttle(stopPlayerTime, 1000));
player.setCurrentTime(getPlayerTime()).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      console.log(
        "The time is less than 0 or greater than the video's duration"
      );
      break;
    default:
      console.log('Some other error occurred');
      break;
  }
});
