"use strict"

import { MegaMenuServicesData } from "../../Utils/data.js";

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


const loadMegaMenu = () => {
  loadMegaMenuServices();
}


export {
  loadMegaMenu
}