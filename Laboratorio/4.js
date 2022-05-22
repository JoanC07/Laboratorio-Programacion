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
 
                </div>
            </div>
            <div class="contact-form-container">
            <form class="contact-form">
                <span class="form-header">Contact us</span>
                <input type="email" class="email-input" placeholder="Email" />
                <textarea name="feedback" cols="30" rows="5" class="message" placeholder="Message..."></textarea>
                <button class="submit" type="submit">Submit</button>
            </form>
            </div>
        </div>
        <style>
            .container {
                background: #fff;
                width: 800px;
                height: 450px;
                border-radius: 24px;
                box-shadow: 16px 16px 8px rgba(0, 0, 0, .1);
                display: flex;
                justify-content: center;
                align-items: center;
            }

        .picture-container {
            /*   border: 1px solid blue; */
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
            background: #8870FF;
            font-size: 100%;
            font-weight: 600;
            border-radius: 6px;
            transition: transform 300ms 0s cubic-bezier(0, 0.23, 0.29, 2.45);
            }

        .submit:hover {
            cursor: pointer;
            background: #7F69EE;
            transform: translateY(-2px);
            }
        </style>
      `;
    }
  }
  window.customElements.define('formulario-contacto',formularioContacto);