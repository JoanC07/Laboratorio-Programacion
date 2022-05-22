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
                      <li><a href="#">HOME</a></li>
                      <li><a href="#">DESCRIPCION DE CONTENIDO </a></li>
                      <li><a href="#">PUNTAJE DE EVALUACION </a></li>
                      <li><a href="#">BIBLIOGRAFIA</a></li>
                      <li><a href="#">FORMULARIO DE INSCRIPCION</a></li>
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