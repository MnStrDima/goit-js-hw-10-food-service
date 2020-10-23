import menuList from '../menu.json';
import menuListTpl from '../templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainerRef = document.querySelector('.js-menu');
const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;
setDarkTheme();
const createMenuMarkup = menuListTpl(menuList);
menuContainerRef.insertAdjacentHTML('beforeend', createMenuMarkup);

themeSwitcherRef.addEventListener('change', onThemeSwitcherClick);

function onThemeSwitcherClick(e) {
  if (e.target.checked) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
  if (!e.target.checked) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function setDarkTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    themeSwitcherRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
  }
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    themeSwitcherRef.checked = false;
    bodyRef.classList.add(Theme.LIGHT);
  }
}
