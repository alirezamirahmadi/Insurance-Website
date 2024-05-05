"use strict"

import { ArticleData } from '../../Utils/data.js';


const loadArticleData = () => {
  const serviceList = document.getElementById('articles-list');
  if (serviceList) {
    ArticleData.map(article => {
      serviceList.innerHTML +=
        `
          <div class="max-w-sm h-fit max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
            <card-image cardimage="${article.image}" cardurl="${article.href}" cssURL="./src/Component/CardImage/cardimage.css"></card-image>
            <article-card author="${article.author}" date="${article.date}" title="${article.title}" summary="${article.summary}" cssURL="./dist/tailwind-output.css"></article-card>
          </div>
        `;
    })
  }
}

const loadPagination = () => {
  const serviceList = document.getElementById('pagination-articles');
  if (serviceList) {
    let component = '';
    let pageCount = ArticleData.length / 8;
    component +=
      `
        <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a href="#"
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <img src="../../../public/svg/Pagination/previous.svg" class="w-1.5"/>
          </a>
        </li>`;
    for (let index = 1; index <= pageCount; index++) {
      component +=
        `
        <li>
          <a href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${index}</a>
        </li>  
        `;
    }
    component +=
      `
      <li>
        <a href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <img src="../../../public/svg/Pagination/next.svg" class="w-1.5"/>
        </a>
      </li>
    </ul>
      `;
    serviceList.innerHTML = component;
  }
}

const loadArtcles = () => {
  loadArticleData();
  loadPagination();
}

export {
  loadArtcles
}