<<<<<<< HEAD
class Galeria extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="galeria">
                <h1>Lugares emblematicos de Ecuador</h1>
                <div class="contenedor-imagenes">
                    <div class="imagen">
                        <img src="/Laboratorio/Imagenes/cotopaxi.jpg" alt="">
                        <div class="overlay">
                            <h2>Volcán Cotopaxi</h2>
                        </div>
                    </div>
                     <div class="imagen">
                        <img src="/Laboratorio/Imagenes/Quito.jpg" alt="">
                        <div class="overlay">
                            <h2>Catedral de Quito</h2>
                        </div>
                    </div>
                    <div class="imagen">
                        <img src="/Laboratorio/Imagenes/quito2.jpg" alt="">
                        <div class="overlay">
                            <h2>Vista nocturna de centro de Quito</h2>
                        </div>
                    </div>
                    <div class="imagen">
                        <img src="/Laboratorio/Imagenes/Ecuador.jpg" alt="">
                        <div class="overlay">
                            <h2>Sendero del teleferico en Quito</h2>
                        </div>
                    </div>
                    <div class="imagen">
                        <img src="/Laboratorio/Imagenes/sierra1.jpg" alt="">
                        <div class="overlay">
                            <h2>Pailón del Diablo</h2>
                        </div>
                    </div>
                    <div class="imagen">
                        <img src="/Laboratorio/Imagenes/sierra2.jpg" alt="">
                        <div class="overlay">
                            <h2>Malecón 2000 - Guayaquil</h2>
                        </div>
                    </div>
                    <div class="imagen">
                        <img src="/Laboratorio/Imagenes/playa.jpg" alt="">
                        <div class="overlay">
                            <h2>Playa de San Lorenzo - Manabí</h2>
                        </div>
                    </div>
                    <div class="imagen">
                        <img src="Imagenes/insular.jpg" alt="">
                        <div class="overlay">
                            <h2>San Cristobal - Galapagos</h2>
                        </div>
                    </div>
                    <div class="imagen">
                        <img src="Imagenes/playa2.jpg" alt="">
                        <div class="overlay">
                            <h2>Santa Elena</h2>
                        </div>
                    </div>
                </div>
            </div>
            <style>
            *{
                margin:0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .galeria{
                font-family: 'open sans';
            }
            
            .galeria h1{
                text-align: center;
                margin:20px 0 15px 0;
                font-weight: 300;
            }
            
            .linea{
                border-top: 5px solid #0077C0;
                margin-bottom: 40px;
            }
            
            .contenedor-imagenes{
                display:flex;
                width: 85%;
                margin: auto;
                justify-content: space-around;
                flex-wrap: wrap;
                border-radius:3px;
            }
            
            .contenedor-imagenes .imagen{
                width: 32%;
                position: relative;
                height:250px;
                margin-bottom:5px;
                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .75)
            }
            .imagen img{
                width: 100%;
                height:100%;
                object-fit: cover;
            }
            
            .overlay{
                position: absolute;
                bottom: 0;
                left: 0;
                background:rgba(20, 218, 168, 0.781) ;
                width: 100%;
                height: 0;
                overflow: hidden;
                transition: .5s ease;
            }
            
            .overlay h2{
                color: #fff;
                font-weight: 300;
                font-size:30px;
                position: absolute;
                top: 50%;
                left:50%;
                text-align: center;
                transform: translate(-50%, -50%);
            }
            
            .imagen:hover .overlay{
                height:100%;
                cursor: pointer;
            }
            
            @media screen and (max-width:1000px){
                .contenedor-imagenes{
                    width: 95%;
                }
            }
            
            @media screen and (max-width:700px){
                .contenedor-imagenes{
                    width: 90%;
                }
                .contenedor-imagenes .imagen{
                    width: 48%;
                }
            }
            
            @media screen and (max-width:450px){
                h1{
                    font-size:22px;
                }
                .contenedor-imagenes{
                    width: 98%;
                }
                .contenedor-imagenes .imagen{
                    width: 80%;
                }
            }
            </style>
        `
    }
}

window.customElements.define("galeria-index", Galeria);
