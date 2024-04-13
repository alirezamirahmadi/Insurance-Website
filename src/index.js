"use strict"


import './Pages/Home/Home.js';
import { loadServiceListData, loadAboutCompanyData, loadPopularServiceData, loadAmazingCompanyData } from './Pages/Home/Home.js';

$(function () {
  $('#navbar').load('./src/Component/NavBar/NavBar.html #component-navbar');

  $('#home').load('./src/Pages/Home/Home.html #page-home', () => {
    loadServiceListData();
    loadAboutCompanyData();
    loadPopularServiceData();
    loadAmazingCompanyData();
  });
})

// $('service-list').parent();
// console.log('main', document.getElementById('body'));
// console.log('main', $('service-list').parent());