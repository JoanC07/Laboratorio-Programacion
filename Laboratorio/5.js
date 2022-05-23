class FooterLM extends HTMLElement{
    //Aqui iria el codigo del elemento
    constructor(){
      super();
    }
    connectedCallback(){
      this.innerHTML=`

      `;
    }
  }
  window.customElements.define('footer-lm',FooterLM);