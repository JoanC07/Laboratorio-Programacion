class SellLabel extends HTMLElement{
    //Aqui iria el codigo del elemento
    constructor(){
      super();
    }
    connectedCallback(){
      this.innerHTML=`

      `;
    }
  }
  window.customElements.define('sell-label',SellLabel);