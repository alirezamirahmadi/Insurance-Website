"use strict"


class ImageCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('#cardimage').src = this.getAttribute('cardimage');
    this.shadowRoot.querySelector('#cardurl').href = this.getAttribute('cardurl');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
    <div class="box">
      <img id="cardimage" src="" loading="lazy">
        <div class="box-content">
          <ul class="icon">
            <li><a id="cardurl" href=""><i class=""></i></a></li>
          </ul>
        </div>
    </div>
    `;

window.customElements.define('card-image', ImageCard);
