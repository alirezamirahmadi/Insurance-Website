"use strict"


class ArticleCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('#articlecardauthor').innerHTML = this.getAttribute('author');
    this.shadowRoot.querySelector('#articlecarddate').innerHTML = this.getAttribute('date');
    this.shadowRoot.querySelector('#articlecardtitle').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('#articlecardsummary').innerHTML = this.getAttribute('summary');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <div id="articlecarddate" class="mb-2 p-3 text-lg tracking-tight text-white bg-primary-default rounded-lg absolute top-4 right-4"></div>
  <div class="p-5">
    <p id="articlecardauthor" class="mb-2 text-xl tracking-tight text-primary-text"></p>
        <a href="#">
            <p id="articlecardtitle" class="mb-2 text-2xl font-bold tracking-tight text-secondary-default hover:text-primary-default"></p>
        </a>
        <p id="articlecardsummary" class="mb-3 font-normal text-xl text-primary-text line-clamp-2"></p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-secondary-default rounded-lg hover:text-primary-default focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    `;

window.customElements.define('article-card', ArticleCard);
