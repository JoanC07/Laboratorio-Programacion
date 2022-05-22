class EncabezadoHeader extends HTMLElement{
    //Aqui iria el codigo del elemento
    constructor(){
      super();
    }
    connectedCallback(){
      this.innerHTML=`
      <header class="header">
      <div class="container logo-nav-container">
         <div class="logo" align="center"><img src="·">
              <nav class="navegation">
                  <ul>
                      <li><a href="#">INICIO</a></li>
                      <li><a href="#">DESCRIPCION</a></li>
                      <li><a href="#">NUESTRA GALERIA</a></li>
                      <li><a href="#">SUGERENCIAS</a></li>
                      <li><a href="#">CONTACTENOS</a></li>
                  </ul>
              </nav>
          </div>
      </header>
  
      <style>
       .container {
          width: 85%;
          max-width: 1100px;
          margin: 0 auto;
      }
       .header a {
          color: black;
          text-decoration: none;
      }
      .navegation ul {
          margin: 0;
          padding: 0;
          list-style: none;
      }
      
      .navegation ul li {
          display: inline-block;
      }
      
      .navegation ul li a {
          display: block;
          padding: 0.5rem 1rem;
          transition: all 0.4s linear;
          font-size: 15px;
      }
      
      .navegation ul li a:hover {
          background: rgb(131, 154, 228);
      }
      
    </style>
      `;
    }
  }
  window.customElements.define('encabezado-header',EncabezadoHeader);