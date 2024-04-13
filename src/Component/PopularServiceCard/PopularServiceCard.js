"use strict"


class PopularServiceCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('#popularcardtitle').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('#popularcarddescription').innerHTML = this.getAttribute('description');
    this.shadowRoot.querySelector('#popularcardimage').src = this.getAttribute('image');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <div class="flex gap-4 p-8 group/item bg-secondary-default rounded-3xl max-w-sm h-fit max-h-fit hover:shadow-xl">
    <div>
      <img id="popularcardimage" class="w-28 p-3 bg-secondary-light rounded-full"/>
    </div>
    <div>
      <a href="#">
        <h5 id="popularcardtitle" class="mb-2 text-2xl font-bold tracking-tight text-white group/edit group-hover/item:text-primary-default"></h5>
      </a>
      <p id="popularcarddescription" class="mb-3 font-normal text-lg text-white line-clamp-2"></p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white rounded-lg hover:text-primary-default focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
  `;

window.customElements.define('popular-card', PopularServiceCard);
