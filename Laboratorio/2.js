class Contenido extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .contenedor {
            width: 80%;
            height: 80%;
            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding-top: 10px;
            padding-left: 5px;
            padding-bottom: 25px;
        }
        
        .contenedor .contenido {
            width: 800px;
            height: 150px;
            color: rgb(122, 125, 125);
            font-size: 15px;
            text-align: justify;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        
        .contenedor img {
            width: 300px;
            height: 70px;
        }
        
        .regiones {
            display: flex;
            justify-content: flex-start;
            width: 900px;
        }
        
        .regiones img {
            width: 250px;
            height: 170px;
            padding: 20px;
        }
        
        h1 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            color: rgb(46, 115, 212);
        }
        
        hr {
            height: 8px;
            margin-right: 8%;
            margin-left: 10%;
            background-color: rgb(190, 204, 220);
        }
    </style>
    <center>
        <div class="contenedor" id="descripcion">
            <center>
                <img src="Imagenes/img2.png">
                <div class="contenido">
                    <p>
                        Ecuador es un país lleno de riqueza natural y animal. La magnitud de la diversidad de esta flora y fauna se admira en cada pueblo, ciudad, iglesia, parque nacional, reserva, en fin a cada paso que se da a lo largo y ancho de sus cuatro regiones. Ecuador
                        alberga 1618 especies de aves, alrededor de unas 4500 mariposas, reptiles 345, los anfibios 358 y los mamíferos 258, entre otras. Es por esta razón que Ecuador está considerado como uno de los 17 países más biodiversos del planeta,
                        pero si somos el país con mayor diversidad por km del mundo.
                    </p>
                </div>
            </center> <br>
            <h1>
                REGIONES DEL ECUADOR
            </h1>
            <hr>
            <div class="regiones" id="sugerencias">
                <img src="Imagenes/img3.png">
                <center>
                    <h1>Region Costera</h1>
                    <p style="text-align: justify; font-size: 20px; font-family: Arial, Helvetica, sans-serif;;">
                        Es parte del Chocó biogeográfico. Se ubica al oeste del país; el territorio de la Costa está formado por llanuras fértiles, colinas, cuencas sedimentarias y elevaciones de poca altitud. Por su territorio corren ríos que parten desde los Andes hasta llegar
                        al Océano Pacífico
                    </p>
                </center>

            </div>
            <hr>
            <div class="regiones">
                <img src="Imagenes/img4.png">
                <center>
                    <h1>Region Interandina</h1>
                    <p style="text-align: justify; font-size: 20px; font-family: Arial, Helvetica, sans-serif;">
                        Se encuentra ubicada entre el Nudo de los Pastos al norte hasta el de Loja al sur, ocupando una franja de 600 km de largo por 100 km a 400 km de ancho, la altura media es de 4 000 metros. La estación lluviosa o invierno dura de octubre a mayo, con una
                        temperatura anual promedio que varía de 12 °C a 18 °C.
                    </p>
                </center>
            </div>
            <hr>
            <div class="regiones">
                <img src="Imagenes/img5.png">
                <center>
                    <h1>Region Amazónica</h1>
                    <p style="text-align: justify; font-size: 20px; font-family: Arial, Helvetica, sans-serif;">
                        Comprende las provincias de Orellana, Pastaza, Napo, Sucumbíos, Morona Santiago, Zamora Chinchipe. Se extiende sobre un área de 120.000 km² de exuberante vegetación, propia de los bosques húmedo-tropicales. Sus límites están marcados por la Cordillera
                        de los Andes en la parte occidental de esta región, mientras que Perú y Colombia el límite meridional y oriental, respectivamente.
                    </p>
                </center>
            </div>
            <hr>
            <div class="regiones">
                <img src="Imagenes/img6.png">
                <center>
                    <h1>Region Insular</h1>
                    <p style="text-align: justify; font-size: 20px; font-family: Arial, Helvetica, sans-serif;">
                        Las islas Galápagos (también islas de los Galápagos y oficialmente archipiélago de Colón) constituyen un archipiélago del océano Pacífico ubicado a 1.000 km de la costa de Ecuador. Está conformado por 13 grandes islas volcánicas, 6 islas más pequeñas
                        y 107 rocas e islotes, distribuidas alrededor de la línea del ecuador terrestre.
                    </p>
                </center>
            </div>
        </div>
    </center>

        `
    }
}

window.customElements.define("contenido-index", Contenido);