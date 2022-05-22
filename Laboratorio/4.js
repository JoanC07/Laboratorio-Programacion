class formularioContacto extends HTMLElement{
    //Aqui iria el codigo del elemento
    constructor(){
      super();
    }
    connectedCallback(){
      this.innerHTML=`
        <div class="container">
            <div class="picture-container">
                <div class="picture">
                    <div class="content-image">
                        <div class="wrapper">
                            <div class="lid one"></div>
                            <div class="lid two"></div>
                            <div class="envelope"></div>
                            <div class="letter">
                                <p>Gracias por su comentario</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-form-container">
            <form class="contact-form">
                <span class="form-header">Contact us</span>
                <input type="email" class="email-input" placeholder="Email" />
                <textarea required name="feedback" cols="30" rows="5" class="message" placeholder="Message..."></textarea>
                <button class="submit" type="submit">Submit</button>
            </form>
            </div>
        </div>
        <style>

            :root {
                --color: #08f;
                --colorHover: #06f;
            }
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .container {
                background: #f1f1f1;
                margin: 20px auto;
                width: calc(100vw - 300px);
                height: 450px;
                border-radius: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .picture-container {
                /*   border: 1px solid blue; */
                margin-left: -100px;
                width: 50%;
                height: 100%;
                align-self: flex-start;
                display: flex;
                justify-content: center;
                align-items: center;
            }



            .contact-form-container {
                height: 90%;
                width: 300px;
            }

            .contact-form {
                height: 100%;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-content: space-around;
            }

            .form-header {
                font-size: 2em;
                font-weight: 700;
                align-self: flex-start;
            }

            .email-input {
                border: none;
                outline: none;
                background: #eee;
                padding: 20px;
                border-radius: 6px;
                width: 100%;
                font-size: 100%;
            }

            .message {
                border: none;
                outline: none;
                resize: none;
                background: #eee;
                padding: 20px;
                border-radius: 6px;
                width: 100%;
                font-size: 100%;
            }

            .submit {
                border: none;
                outline: none;
                color: #fff;
                width: 100%;
                padding: 20px;
                background: var(--color);
                font-size: 100%;
                font-weight: 600;
                border-radius: 6px;
                transition: all .8s;
            }

            .submit:hover {
                color: #f1f1f1;
                cursor: pointer;
                background: var(--colorHover);
                transform: translateY(-8px);
            }

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
  window.customElements.define('formulario-contacto',formularioContacto);