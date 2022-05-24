class MesageAnimation extends HTMLElement{
    //Aqui iria el codigo del elemento

    constructor(){
      super();

    }

    connectedCallback(){
      this.innerHTML= ` 
                    <div class="content-image">
                        <div class="wrapper">
                            <div class="lid one"></div>
                            <div class="lid two"></div>
                            <div class="envelope"></div>
                            <div class="letter">
                                <p id="form-message">Gracias por su comentario</p>
                            </div>
                        </div>
                        </br></br>
                        <center>
                            <button>Cambiar Texto</button>
                        </center>
                    </div>
                    <style>
                    
            // Animation
            .content-image{
                transform: scale(0.2)
               }      

            .wrapper {
            height: 200px;
            width: 300px;
            background-color: #3760C9;
            position: relative;
            display: flex;
            justify-content: center;
            z-index: 0;
            }

            .lid {
            position: absolute;
            height: 20%;
            width: 20%;
            top: 0;
            left: 0;
            border-right: 150px solid transparent;
            border-bottom: 100px solid transparent;
            border-left: 150px solid transparent;
            transform-origin: top;
            transition: transform 0.25s linear;
            }

            /* Lid when closed */
            .lid.one {
            border-top: 100px solid #658ced;
            transform: rotateX(0deg);
            z-index: 3;
            transition-delay: 0.75s;
            }

            /* Lid when opened */
            .lid.two {
            border-top: 100px solid #3760C9;
            transform: rotateX(90deg);
            z-index: 1;
            transition-delay: 0.5s;
            }

            .envelope {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            border-top: 100px solid transparent;
            border-right: 150px solid #C4DFF0;
            border-bottom: 100px solid #C4DFF0;
            border-left: 150px solid #a4d4f2;
            z-index: 3;
            }

            .letter {
            position: absolute;
            top: 0;
            width: 80%;
            height: 80%;
            background-color: white;
            border-radius: 15px;
            z-index: 2;
            transition: 0.5s;
            }

            .letter > p {
            text-align: center;
            font-size: 30px;
            margin-top: 30px;
            color: #3B4049;
            }

            .wrapper:hover .lid.one {
                transform: rotateX(90deg);
                transition-delay: 0s;
            }

            .wrapper:hover .lid.two {
                transform: rotateX(180deg);
                transition-delay: 0.25s;
            }

            .wrapper:hover .letter {
            transform: translateY(-50px);
            transition-delay: 0.5s;
            }
        </style>
        `;
    }
}
window.customElements.define('message-animation',MesageAnimation);