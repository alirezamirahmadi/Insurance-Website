"use strict"


class StepToGetCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('#stepcardimage').src = this.getAttribute('image');
    this.shadowRoot.querySelector('#stepcardicon').src = this.getAttribute('icon');
    this.shadowRoot.querySelector('#stepcardstep').innerHTML = this.getAttribute('step');
    this.shadowRoot.querySelector('#stepcardtitle').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('#stepcarddescription').innerHTML = this.getAttribute('description');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <div class="p-5 text-center w-96 mx-auto">
    <div class="mb-10 relative">
      <img id="stepcardimage" class="mx-auto -rotate-12"/>
      <div class="w-20 h-20 rounded-full shadow-md absolute top-36 right-28 bg-white"><img id="stepcardicon" class="block w-14 h-14 mx-auto mt-3"/></div>
      <div id="stepcardstep" class="text-md text-white bg-primary-default rounded-md p-3 absolute top-6 right-4 rotate-6"></div>
    </div>
    <h5 id="stepcardtitle" class="mb-2 text-2xl font-bold tracking-tight text-secondary-default hover:text-primary-default"></h5>
    <p id="stepcarddescription" class="mb-3 font-normal text-lg text-primary-text"></p>    
  </div>
  `;

window.customElements.define('step-card', StepToGetCard);
