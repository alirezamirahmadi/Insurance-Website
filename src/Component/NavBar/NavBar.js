"use strict"
import $ from 'jquery';


class NavBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('link').href = this.getAttribute('cssURL');
    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
  }
}

const navbar = document.getElementById('idNavBar');
console.log(navbar);
const template = document.createElement('template');
template.innerHTML = navbar.innerHTML;
  // `
  // <link rel="stylesheet">
  // <div class="bg-primary-default h-16 md:h-24 pt-4 w-full">
  //   <img class="w-32 md:w-48 border-primary-default border-4 rounded-3xl mx-2 md:mx-8 float-left" alt="">
  //   <div class="flex content-center justify-end lg:justify-between md:my-4 me-4">
  //     <ul class="text-white lg:flex hidden ">
  //       <li class="ms-4 text-2xl cursor-pointer">home</li>
  //       <li class="ms-4 text-2xl cursor-pointer">services</li>
  //       <li class="ms-4 text-2xl cursor-pointer">aboutus</li>
  //     </ul>
  //     <div class="bg-white rounded-md w-36 h-10 lg:flex hidden sm:w-48 me-0 sm:me-4">
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-1.5 ">
  //         <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  //       </svg>        
  //       <input class="h-full w-20 rounded-md focus:outline-none ps-2" type="text">
  //     </div>
  //     <button class="text-white lg:hidden flex left-0">
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-9 h-9">
  //         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  //       </svg>        
  //     </button>
  //   </div>
  // </div>`;

window.customElements.define('nav-bar', NavBar)


class CompSlot extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(menu.content.cloneNode(true))
    // this.shadowRoot.appendChild(template2.content.cloneNode(true))      
  }
  // cyclelife
  connectedCallback() {
    // eventHandler, ...
    const btnRemove = this.shadowRoot.getElementById('btnRemove')
    btnRemove.addEventListener('click', () => {
      this.compRemove(this)
    })
  }
  compRemove(elem) {
    elem.remove()
  }
  disconnectedCallback() {
    // remove handlers
    console.log('component removed');

    const btnRemove = this.shadowRoot.getElementById('btnRemove')
    btnRemove.removeEventListener('click', this.compRemove)
  }
}