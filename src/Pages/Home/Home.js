"use strict"

import { ServiceListData, AboutCompanyData, PopularServiceData, AmazingCompanyData } from '../../Utils/data.js';


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

  // options with default values
  const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
      console.log('accordion item has been shown');
      console.log(item);
    },
    onClose: (item) => {
      console.log('accordion item has been hidden');
      console.log(item);
    },
    onToggle: (item) => {
      console.log('accordion item has been toggled');
      console.log(item);
    },
  };

  // instance options object
  const instanceOptions = {
    id: 'amazing-company',
    override: true
  };

  // const accordion = new Accordion(amazingCompany, accordionItems, options, instanceOptions);
}


export {
  loadServiceListData, loadAboutCompanyData, loadPopularServiceData, loadAmazingCompanyData
}