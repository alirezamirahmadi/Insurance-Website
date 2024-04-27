"use strict"


class CommentCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('#commentcardcontent').innerHTML = this.getAttribute('content');
    this.shadowRoot.querySelector('#commentcardname').innerHTML = this.getAttribute('name');
    this.shadowRoot.querySelector('#commentcardcity').innerHTML = this.getAttribute('city');
    this.shadowRoot.querySelector('#commentcardimage').src = this.getAttribute('image');
  }
}


const template = document.createElement('template');
template.innerHTML =
  `
  <link rel="stylesheet">
  <div class=" p-8 bg-secondary-default rounded-3xl">
    <p id="commentcardcontent" class="mb-3 font-normal text-xl text-white line-clamp-4"></p>
    <div class="flex mt-8">
      <img id="commentcardimage" class="w-24 p-1.5 bg-primary-default rounded-full"/>
      <div class="ms-2 mt-2">
        <p id="commentcardname" class="mb-2 text-2xl font-bold tracking-tight text-white group/edit group-hover/item:text-primary-default"></p>
        <p id="commentcardcity" class="mb-2 text-lg tracking-tight text-white group/edit group-hover/item:text-primary-default"></p>
      </div>
    </div>
  </div>
  `;

window.customElements.define('comment-card', CommentCard);
