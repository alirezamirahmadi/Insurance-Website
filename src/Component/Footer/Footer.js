"use strict"

import { ServiceListData, OtherServiceData, GalleryData } from "../../Utils/data.js";

const loadSocialNetwork = () => {
  $('social-network').load('./src/Component/SocialNetwork/SocialNetwork.html #social-icon');
  $(function () {
    console.log(1);
  })
}

const loadServiceData = () => {
  const serviceList = document.getElementById('footer-services');
  if (serviceList) {
    ServiceListData.map(service => {
      serviceList.innerHTML +=
        `
          <li class="text-white flex items-center">
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            <a href="${service.href}" class="text-lg leading-10 ms-2">${service.title}</a>
          </li>
        `;
    })
  }
}

const loadOtherServiceData = () => {
  const serviceList = document.getElementById('footer-other-services');
  if (serviceList) {
    OtherServiceData.map(service => {
      serviceList.innerHTML +=
        `
          <li class="text-white flex items-center">
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            <a href="${service.href}" class="text-lg leading-10 ms-2">${service.title}</a>
          </li>
        `;
    })
  }
}

const loadGalleryData = () => {
  const gallery = document.getElementById('footer-gallery');
  if (gallery) {
    GalleryData.map(image => {
      gallery.innerHTML +=
        `
        <a href="#">
          <img src="${image.image}" class="w-24 h-24 rounded-lg" loading="lazy"/>
        </a>
        `;
    })
  }
}



const loadFooter = () => {
  loadServiceData();
  loadOtherServiceData();
  loadGalleryData();
  loadSocialNetwork();
}

export {
  loadFooter
}