import * as basicLightbox from 'basiclightbox';
import teamModalTemp from '../templates/team-modal.hbs';
import { modalTeamOpen } from './refs';

import svgUrl from '../images/sprite.svg';

import alexPMob from '../images/team/team-adaptive/mobile/alexander-ponomarenko.jpg';
import alexPTab from '../images/team/team-adaptive/tablet/alexander-ponomarenko.jpg';
import alexPDesk from '../images/team/team-adaptive/desktop/alexander-ponomarenko.jpg';

import valeraMob from '../images/team/team-adaptive/mobile/valerii-vitenko.jpg';
import valeraTab from '../images/team/team-adaptive/tablet/valerii-vitenko.jpg';
import valeraDesk from '../images/team/team-adaptive/desktop/valerii-vitenko.jpg';

import annaSMob from '../images/team/team-adaptive/mobile/anna-savchuck.jpg';
import annaSTab from '../images/team/team-adaptive/tablet/anna-savchuk.jpg';
import annaSDesk from '../images/team/team-adaptive/desktop/anna-savchuk.jpg';

modalTeamOpen.addEventListener('click', onOpenModalTeam);

function onOpenModalTeam(event) {
  // console.log(event);
  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      instance.element().querySelector('svg').onclick = instance.close;
    },
  });

  instance.show();

  window.addEventListener('keydown', closeModalHand);

  function closeModalHand(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModalHand);
    }
  }
}

const markup = `<div class='team-modal'>
<button type='button' class='team-modal__close-btn'>
  <svg class='team-modal__close-icon' width='20' height='20'>
    <use href='${svgUrl}#icon-close-modal'></use>
  </svg>
</button>
<h1 class='team-modal__title'>“Team, Scream and Two Smoking Mentors”</h1>

<ul class='team-modal__list'>
  <li class='team-modal__list__item'>
    <picture>
      <source srcset='${alexPDesk}' media='(min-width:1024px)' />
      <source srcset='${alexPTab}' media='(min-width:768px)' />
      <source srcset='${alexPMob}' media='(min-width:320px)' />
      <img src='${alexPMob}' alt='aleksandr ponomarenko' class='team-modal__img' />
    </picture>

    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>scrum-master</p>
      <h2 class='team-modal__name'>Alexander Ponomarenko</h2>
      <p class='team-modal__quote'>
        “A minute ago this was the safest job in the world. Now it's turning into a bad day in
        Bosnia.”
      </p>
      <a href='https://www.linkedin.com/in/ponomalex/' class='team-modal__soc-link link'><svg
          class='team-modal__icon'
          width='35'
          height='35'
        >
          <use href='${svgUrl}#icon-linkedin'></use></svg></a>
      <a href='https://github.com/Ponomaleks' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='${svgUrl}#icon-github'></use></svg></a>
    </div>
  </li>

  <li class='team-modal__list__item'>
    <picture>
      <source srcset='${valeraDesk}' media='(min-width:1024px)' />
      <source srcset='${valeraTab}' media='(min-width:768px)' />
      <source srcset='${valeraMob}' media='(min-width:320px)' />
      <img src='${valeraMob}' alt='valerii-vitenko' class='team-modal__img' />

    </picture>
    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>team lead</p>
      <h2 class='team-modal__name'>Valerii Vitenko</h2>
      <p class='team-modal__quote'>“Guns for show, knives for a pro.”</p>
      <a href='https://www.linkedin.com/in/leroviten/' class='team-modal__soc-link link'><svg
          class='team-modal__icon'
          width='35'
          height='35'
        >
          <use href='../sprite.5ec50489.svg#icon-linkedin'></use></svg></a>
      <a href='https://github.com/LeroViten' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-github'></use></svg></a>
    </div>
  </li>

  <li class='team-modal__list__item'>
    <picture>
      <source srcset='../anna-savchuk.3c3b6997.jpg' media='(min-width:1024px)' />
      <source srcset='../anna-savchuk.62854a93.jpg' media='(min-width:768px)' />
      <source srcset='../anna-savchuck.d66459cf.jpg' media='(min-width:320px)' />
      <img src='../anna-savchuck.d66459cf.jpg' alt='anna-savchuck' class='team-modal__img' />
    </picture>

    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>developer</p>
      <h2 class='team-modal__name'>Anna Savchuk</h2>
      <p class='team-modal__quote'>
        “All right, son: roll them guns up, count the money, and put your seat belt on.”
      </p>
      <a
        href='https://www.linkedin.com/in/anna-savchuk-b1759221b/'
        class='team-modal__soc-link link'
      ><svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-linkedin'></use></svg></a>
      <a href='https://github.com/nensi-n' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-github'></use></svg></a>
    </div>
  </li>

  <li class='team-modal__list__item'>
    <picture>
      <source srcset='../anna-pavlova.8ac95507.jpg' media='(min-width:1024px)' />
      <source srcset='../anna-pavlova.92f94894.jpg' media='(min-width:768px)' />
      <source srcset='../anna-pavlova.7b839c49.jpg' media='(min-width:320px)' />
      <img src='../anna-pavlova.7b839c49.jpg' alt='anna-pavlova' class='team-modal__img' />
    </picture>

    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>developer</p>
      <h2 class='team-modal__name'>Anna Pavlova</h2>
      <p class='team-modal__quote'>“It’s been emotional”</p>
      <a href='/' class='team-modal__soc-link link'><svg
          class='team-modal__icon'
          width='35'
          height='35'
        >
          <use href='../sprite.5ec50489.svg#icon-linkedin'></use></svg></a>
      <a href='https://github.com/HPavlova' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-github'></use></svg></a>
    </div>
  </li>

  <li class='team-modal__list__item'>
    <picture>
      <source srcset='../serhii-nechytailenko.c5e74244.jpg' media='(min-width:1024px)' />
      <source srcset='../serhii-nechytailenko.b4ec8490.jpg' media='(min-width:768px)' />
      <source srcset='../serhii-nechytailenko.b34b507d.jpg' media='(min-width:320px)' />
      <img
        src='../serhii-nechytailenko.b34b507d.jpg'
        alt='serhii-nechytailenko'
        class='team-modal__img'
      />
    </picture>

    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>developer</p>
      <h2 class='team-modal__name'>Serhii Nechytailenko</h2>
      <p class='team-modal__quote'>“You're not funny, Valera.”</p>
      <a
        href='https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%BD%D0%B5%D1%87%D0%B8%D1%82%D0%B0%D0%B9%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-0ab499215/'
        class='team-modal__soc-link link'
      ><svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-linkedin'></use></svg></a>
      <a href='https://github.com/serjneo' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-github'></use></svg></a>
    </div>
  </li>

  <li class='team-modal__list__item'>
    <picture>
      <source srcset='../alexander-baran.5bcb5cb7.jpg' media='(min-width:1024px)' />
      <source srcset='../alexander-baran.b413d89b.jpg' media='(min-width:768px)' />
      <source srcset='../alexander-baran.f9c5f7c0.jpg' media='(min-width:320px)' />
      <img src='../alexander-baran.f9c5f7c0.jpg' alt='alexander-baran' class='team-modal__img' />
    </picture>

    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>developer</p>
      <h2 class='team-modal__name'>Alexander Baran</h2>
      <p class='team-modal__quote'>“If you hold back anything, I'll kill ya.”</p>
      <a
        href='https://www.linkedin.com/in/alexander-baran-415091212/'
        class='team-modal__soc-link link'
      ><svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-linkedin'></use></svg></a>
      <a href='https://github.com/lidanko12' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-github'></use></svg></a>
    </div>
  </li>

  <li class='team-modal__list__item'>
    <picture>
      <source srcset='../roma-leshenko.b3c54a52.jpg' media='(min-width:1024px)' />
      <source srcset='../roma-leshenko.94190757.jpg' media='(min-width:768px)' />
      <source srcset='../roma-leshenko.29572575.jpg' media='(min-width:320px)' />
      <img src='../roma-leshenko.29572575.jpg' alt='roma-leshenko' class='team-modal__img' />
    </picture>

    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>developer</p>
      <h2 class='team-modal__name'>Roman Leshenko</h2>
      <p class='team-modal__quote'>“You're lucky you're still breathing”</p>
      <a
        href='https://www.linkedin.com/in/roman-leshchenko-467149220/'
        class='team-modal__soc-link link'
      ><svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-linkedin'></use></svg></a>
      <a href='https://github.com/xetyri' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-github'></use></svg></a>
    </div>
  </li>

  <li class='team-modal__list__item'>
    <picture class='team-modal__img'>
      <source srcset='../julia-ohrimenko.745c4808.jpg' media='(min-width:1024px)' />
      <source srcset='../julia-ohrimenko.536d1ea8.jpg' media='(min-width:768px)' />
      <source srcset='../julia-okhrimenko.2ca15e00.jpg' media='(min-width:320px)' />
      <img
        src='../julia-okhrimenko.2ca15e00.jpg'
        alt='julia-okhrimenko'
        class='team-modal__img'
      />
    </picture>

    <div class='team-modal__list--side-info'>
      <p class='team-modal__role-title'>developer</p>
      <h2 class='team-modal__name'>Julia Okhrimenko</h2>
      <p class='team-modal__quote'>
        “If the milk turns out to be sour, I ain't the kinda pussy to drink it.”
      </p>
      <a
        href='https://www.linkedin.com/in/julia-ohrimenko-97281515b/'
        class='team-modal__soc-link link'
      ><svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-linkedin'></use></svg></a>
      <a href='https://github.com/juliedevdes' class='team-modal__soc-link link'>
        <svg class='team-modal__icon' width='35' height='35'>
          <use href='../sprite.5ec50489.svg#icon-github'></use></svg></a>
    </div>
  </li>

</ul>
</div>`;
