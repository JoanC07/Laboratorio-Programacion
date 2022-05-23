class formularioContacto extends HTMLElement{
    //Aqui iria el codigo del elemento
    constructor(){
      super();
    }
    connectedCallback(){
      this.innerHTML=`
        <div class="container" id="formulario-contacto">
            <div class="picture-container">
                <div class="picture">
                   <message-animation></message-animation>
                </div>
            </div>
            <div class="contact-form-container">
            <form class="contact-form">
                <span class="form-header">Contáctate con nosotros</span>
                <input type="email" class="email-input" placeholder="Correo electrónico" />
                <textarea required name="feedback" cols="30" rows="5" class="message" placeholder="Mensaje..."></textarea>
                <button class="submit" type="submit">Enviar</button>
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
      `;
    }
  }
  window.customElements.define('formulario-contacto',formularioContacto);