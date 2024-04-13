"use strict"

import { ServiceListData, AboutCompanyData, PopularServiceData } from '../../Utils/data.js';


const loadServiceListData = () => {
  const serviceList = document.getElementById('service-list');
  if (serviceList) {
    ServiceListData.map(service => {
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
  const aboutCompany = document.getElementById('aboutcompanytabs');
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

export {
  loadServiceListData, loadAboutCompanyData, loadPopularServiceData
}