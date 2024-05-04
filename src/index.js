"use strict"

import './Component/MegaMenu/MegaMenu.js';
import './Pages/Home/Home.js';
import './Component/Footer/Footer.js';
import './Pages/Services/Services.js'
import { loadMegaMenu } from './Component/MegaMenu/MegaMenu.js';
import { loadHome } from './Pages/Home/Home.js';
import { loadFooter } from './Component/Footer/Footer.js';
import { loadServices } from './Pages/Services/Services.js';

let page = new URL(location.href).searchParams.get('page')

$(function () {

  $('#topbar').load('./src/Component/TopBar/TopBar.html #component-topbar');

  $('#navbar').load('./src/Component/NavBar/NavBar.html #component-navbar', () => {
    loadMegaMenu();
  });

  switch (page) {
    case 'home':
      $('#main').load('./src/Pages/Home/Home.html #page-home', () => { loadHome(); });
      break;
    case 'services':
      $('#main').load('./src/Pages/Services/Services.html #page-services', () => { loadServices(); });
      break;
    default:
      $('#main').load('./src/Pages/Home/Home.html #page-home', () => { loadHome(); });
      break;
  }

  $('#footer').load('./src/Component/Footer/Footer.html #component-footer', () => {
    loadFooter();
  });

  $('#bottom-navigation').load('./src/Component/BottomNavigation/BottomNavigation.html #component-bottom-navigation');

})


