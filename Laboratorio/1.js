class EncabezadoHeader extends HTMLElement {
    //Aqui iria el codigo del elemento
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
      <header>
    <nav>
        <a href="#">INICIO</a>
        <a href="#descripcion">DESCRIPCIÓN</a>
        <a href="#sugerencias">SUGERENCIAS</a>
        <a href="#galeria">NUESTRA GALERIA</a>
        <a href="#formulario-contacto">CONTACTENOS</a>
    </nav>
    <section class="textos-header">
        <h1>Lo mejor de| ECUADOR</h1>
        <h2>Universidad ESPE</h2>
    </section>
    <div class="wave" style="height: 150px; overflow: hidden;">
        </svg></div>
</header>

    <style>
    header {
      width: 100%;
      height: 500px;
      background: #fff;
      background: -webkit-linear-gradient(to right, hsla(224, 100%, 67%, 0.459), hsla(224, 83%, 72%, 0.664)), url(Imagenes/portada.jpg);
      background: linear-gradient(to right, hsla(222, 93%, 53%, 0.459), hsla(219, 86%, 75%, 0.664)), url(Imagenes/portada.jpg);
      background-size: cover;
      background-attachment: fixed;
      position: relative;
  }
  
  nav{
      text-align: right;
      padding: 30px 50px 0 0;
  }
  
  nav > a{
      color:#fff;
      font-weight: 300;
      text-decoration: none;
      margin-right: 10px;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  nav > a:hover{
      text-decoration: underline;
  }
  
  header .textos-header{
      display: flex;
      height: 430px;
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
  }
  
  .textos-header h1{
      font-size: 50px;
      color:#fff;
  }
  
  .textos-header h2{
      font-size: 30px;
      font-weight: 300;
      color:#fff;
      font-family: Arial, Helvetica, sans-serif;
  }
    
  </style>
      `;
    }
}
window.customElements.define('encabezado-header', EncabezadoHeader);