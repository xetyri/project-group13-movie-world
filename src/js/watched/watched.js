import { watchedBtn } from '../refs';
import renderGallery from '../render-gallery';
import getWatched from './get-watched';

renderWatched();

function renderWatched() {
  watchedBtn.addEventListener('click', onWatchedClick);

  function onWatchedClick() {
    renderGallery(getWatched());
  }
}
