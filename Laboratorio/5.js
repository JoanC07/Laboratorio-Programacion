class FooterLM extends HTMLElement {
    //Aqui iria el codigo del elemento
    constructor() {
        super();
    }
    connectedCallback() {
        const texto = 'Turismo Ecuador, podemos realizar actividades turísticas con deportes de aventura (buceo,turismo gastronómico, turismo fiestas religiosas, fiestas populares, fiestas cívicas, cultura y arte, sitios naturales, turismo en las comunidades.';
        this.innerHTML = `
      <footer>

        <div class="container__footer">
            <div class="box__footer">
                <div class="logo">
                    <img src="Imagenes/LogoEcuador.png" alt="">
                </div>
                <div class="terms">
                    <p>${texto}</p>
                </div>
            </div>
            <div class="box__footer">
                <h2>Ciudades</h2>
                <a href="#">Quito</a>
                <a href="#">Guayaquil</a>
                <a href="#">Esmeraldas</a>
                <a href="#">Manabí</a>
            </div>

            <div class="box__footer">
                <h2>Deportes</h2>
                <a href="#">Alpinismo</a>
                <a href="#">Buceo</a>
                <a href="#">Ciclismo</a>
                <a href="#">Voley</a>              
            </div>

            <div class="box__footer">
                <h2>Redes Sociales Turismo</h2>
                <a href="#"> Facebook</a>
                <a href="#" >Twitter</a>
                <a href="#" >Instagram</a>
            </div>

        </div>

        <div class="box__copyright">
            <hr>
            <p>Todos los derechos reservados © 2022 <b>Turismo Ecuador - ITIN</b></p>
        </div>
    </footer>
    <style>
    footer{
      width: 100%;
      padding: 50px 0px;
      background-image: url(Imagenes/imagen_footer.jpg);
      background-size: cover;
      

  }
  
  .container__footer{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 1200px;
      margin: auto;
      margin-top: 100px;
  }
  
  .box__footer{
      display: flex;
      flex-direction: column;
      padding: 40px;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  .box__footer .logo img{
      width: 180px;
  }
  
  .box__footer .terms{
      max-width: 350px;
      margin-top: 20px;
      font-weight: 500;
      color:#7a7a7a;
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  .box__footer h2{
      margin-bottom: 30px;
      color: rgb(46, 115, 212);
      font-weight: 700;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  .box__footer a{
      margin-top: 10px;
      color: #7a7a7a;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  .box__copyright{
      max-width: 1200px;
      margin: auto;
      text-align: center;
      padding: 0px 40px;
  }
  
  .box__copyright p{
      margin-top: 20px;
      color: skyeblue;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  .box__copyright hr{
      border: none;
      height: 1px;
      background-color: blue;
  }
    </style>


      `;
    }
}
window.customElements.define('footer-lm', FooterLM);