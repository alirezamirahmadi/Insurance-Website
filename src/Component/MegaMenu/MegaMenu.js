"use strict"

import { MegaMenuServicesData, PopularServiceData } from "../../Utils/data.js";

const loadMegaMenuServices = () => {
  const megaMenu = document.getElementById('mega-menu-services');
  let element = '';
  if (megaMenu) {
    element += `<div class="flex">`
    MegaMenuServicesData.map(menuItem => {
      element +=
        `<ul class="pe-10 ps-2 pb-4">
          <li class="w-40 mb-3 mt-2 text-xl text-secondary-default flex">
            <img src="../../../public/svg/Header/square.svg" class="w-3 me-2"/>
            <a>${menuItem.title}</a>
          </li>`
      menuItem.submenu.map(item => (
        element +=
        `<li class="ps-2 mt-2 mb-1 text-lg text-primary-default hover:text-secondary-default">
          <a href="${item.href}">${item.title}</a>
        </li>`
      ))
      element +=`</ul>`;
    })
    element += `</div>`
  }
  megaMenu.innerHTML = element;
}

const loadMegaMenuAboutUs = () => {
  const megaMenu = document.getElementById('mega-menu-aboutus');
  let element = '';
  if (megaMenu) {
    element += `<div class="grid grid-cols-3">`
    PopularServiceData.map(service => {
      element +=
        `<ul class="pe-10 ps-2 pb-4">
          <li class="mb-3 mt-2 text-xl text-secondary-default flex items-center">
            <img src="${service.image}" class="w-16 bg-secondary-default p-2 rounded-full me-4" loading="lazy"/>
            <p>${service.title}</p>
          </li>
          <li class="ps-2 mt-2 mb-1 text-lg text-primary-text">
            ${service.description}
          </li>
        </ul>`;
    })
    element += `</div>`
  }
  megaMenu.innerHTML = element;
}


const loadMegaMenu = () => {
  loadMegaMenuServices();
  loadMegaMenuAboutUs();
}


export {
  loadMegaMenu
}