"use strict"

class AboutCompany extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    
    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('#aboutcompanydesc').innerHTML = this.getAttribute('description');
    let items = (this.getAttribute('items')).split(',');

    let domItems = '';
    items.map(item => {
      domItems += `
      <div class="flex mt-4">
        <img src="../../../public/svg/Home/person.svg" class="w-8"/>
        <span class="text-xl text-secondary-default">${item}</span>
      </div>
`
    })
    this.shadowRoot.querySelector('#aboutcompanyitems').innerHTML = domItems;
  }
}

const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <div class="my-6">
    <p id="aboutcompanydesc" class="text-primary-text text-xl font-medium ms-2 mt-12 mb-4"></p>
    <div id="aboutcompanyitems" class="grid grid-cols-2"></div>
  </div>
  `;

window.customElements.define('about-company', AboutCompany)
