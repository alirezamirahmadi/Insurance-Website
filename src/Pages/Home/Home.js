"use strict"

import { ServiceListData, AboutCompanyData, PopularServiceData, AmazingCompanyData, LatestArticleData } from '../../Utils/data.js';

const loadEvents = () => {
  let btnListServices = document.getElementById('btnListServices');
  btnListServices?.addEventListener('click', () => {
    location.assign('?page=services');
  })
}

const loadServiceListData = () => {
  const serviceList = document.getElementById('service-list');
  if (serviceList) {
    ServiceListData.splice(0, 3).map(service => {
      serviceList.innerHTML +=
        `
          <div class="max-w-sm h-fit max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <card-image cardimage="${service.image}" cardurl="${service.href}" cssURL="./src/Component/CardImage/cardimage.css"></card-image>
            <service-card title="${service.title}" description="${service.description}" cssURL="./dist/tailwind-output.css"></service-card>
          </div>
        `;
    })
  }
}

const loadAboutCompanyData = () => {
  const aboutCompany = document.getElementById('about-company-tabs');
  if (aboutCompany) {
    AboutCompanyData.map(about => {
      aboutCompany.innerHTML +=
        `
          <about-company items="${about.items}" description="${about.description}" cssURL="../../../dist/tailwind-output.css"></about-company>
      `
    })
  }
}

const loadPopularServiceData = () => {
  const popularService = document.getElementById('popular-service');
  if (popularService) {
    PopularServiceData.map(service => {
      popularService.innerHTML +=
        `
          <popular-card title="${service.title}" description="${service.description}" image="${service.image}" cssURL="./dist/tailwind-output.css"></popular-card>
        `;
    })
  }
}

const loadAmazingCompanyData = () => {
  const amazingCompany = document.getElementById('amazing-company');
  const accordionItems = new Array(3);
  let active = true;
  if (amazingCompany) {
    AmazingCompanyData.map((amazing, index) => {
      amazingCompany.innerHTML +=
        `
          <accordion-item id-header="header${index}" id-body="body${index}" header="${amazing.header}" body="${amazing.body}" image="${amazing.image}" cssURL="./dist/tailwind-output.css"></accordion-item>
        `;
      accordionItems.push({
        id: `#header${index}`,
        triggerEl: document.querySelector(`#header${index}`),
        targetEl: document.querySelector(`#body${index}`),
        active
      })
      active = false;
    })
  }
}


const loadArticleListData = () => {
  const articleList = document.getElementById('article-list');
  if (articleList) {
    LatestArticleData.map(article => {
      articleList.innerHTML +=
        `
          <div class="max-w-sm h-fit max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
            <card-image cardimage="${article.image}" cardurl="${article.href}" cssURL="./src/Component/CardImage/cardimage.css"></card-image>
            <article-card author="${article.author}" date="${article.date}" title="${article.title}" summary="${article.summary}" cssURL="./dist/tailwind-output.css"></article-card>
          </div>
        `;
    })
  }
}

const loadHome = () => {
  loadServiceListData();
  loadAboutCompanyData();
  loadPopularServiceData();
  loadAmazingCompanyData();
  loadArticleListData();

  loadEvents();
}

export {
  loadHome
}