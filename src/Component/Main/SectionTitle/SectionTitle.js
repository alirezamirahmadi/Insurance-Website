"use strict"


class SectionTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
     this.shadowRoot.querySelector('#title').innerHTML = this.getAttribute('title');
     this.shadowRoot.querySelector('#description').innerHTML = this.getAttribute('description');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <div class="my-6">
    <p id="title" class="text-primary-default text-2xl font-medium ms-6">AnnaLena</p>
    <p id="description" class="text-secondary-default text-4xl font-medium ms-2">AnnaLena</p>
  </div>
  `;

window.customElements.define('section-title', SectionTitle)
