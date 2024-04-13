"use strict"


class Accordion extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('h2').id = this.getAttribute('id-header');
    this.shadowRoot.querySelector('div').id = this.getAttribute('id-body');
    this.shadowRoot.querySelector('#accordianheader').innerHTML = this.getAttribute('header');
    this.shadowRoot.querySelector('#accordianbody').innerHTML = this.getAttribute('body');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <h2>
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
      <span id="accordianheader" class="text-primary-text text-lg"></span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div class="hidden" aria-labelledby="accordion-color-heading-1">
    <p class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p id="accordianbody" class="mb-2 text-primary-text text-lg"></p>
    </p>
  </div>
  `;

window.customElements.define('accordion-item', Accordion);
