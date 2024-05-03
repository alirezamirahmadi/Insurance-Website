"use strict"

import './Component/MegaMenu/MegaMenu.js';
import './Pages/Home/Home.js';
import './Component/Footer/Footer.js';
import { loadMegaMenu } from './Component/MegaMenu/MegaMenu.js';
import { loadServiceListData, loadAboutCompanyData, loadPopularServiceData, loadAmazingCompanyData, loadArticleListData } from './Pages/Home/Home.js';
import { loadFooter } from './Component/Footer/Footer.js';

$(function () {

  $('#topbar').load('./src/Component/TopBar/TopBar.html #component-topbar');

  $('#navbar').load('./src/Component/NavBar/NavBar.html #component-navbar', () => {
    loadMegaMenu();
  });

  $('#home').load('./src/Pages/Home/Home.html #page-home', () => {
    loadServiceListData();
    loadAboutCompanyData();
    loadPopularServiceData();
    loadAmazingCompanyData();
    loadArticleListData();
  });

  $('#footer').load('./src/Component/Footer/Footer.html #component-footer', () => {
    loadFooter();
  });

  $('#bottom-navigation').load('./src/Component/BottomNavigation/BottomNavigation.html #component-bottom-navigation');

})


