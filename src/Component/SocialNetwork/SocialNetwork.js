"use strict"


class SocialNetwork extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <div class="flex gap-2">
    <a href="#">
      <img src="../../../public/svg/SocialNetwork/facebook.svg" class="w-10"/>
    </a>
    <a href="#" class="bg-secondary-light rounded-full p-2">
      <img src="../../../public/svg/SocialNetwork/twitter.svg" class="w-7"/>
    </a>
    <a href="#" class="bg-secondary-light rounded-full p-2">
      <img src="../../../public/svg/SocialNetwork/instagram.svg" class="w-7"/>
    </a>
  </div>
  `;

window.customElements.define('social-network', SocialNetwork);
