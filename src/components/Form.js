import { LitElement, html, css } from "lit-element";

class Form extends LitElement {
  render() {
    return html`
        <form action="">
            <div class="form">
                <h2>Formulario</h2>
                <div class="form-group">
                    <input name="" id="name" type="text" required><span class="bar"></span>
                    <label for="name">Nombre</label>
                </div>
                <div class="form-group">
                    <input name="" id="email" type="email" required><span class="bar"></span>
                    <label for="email">Email</label>
                </div>
                <div class="form-group">
                    <input name="" id="tlf" type="tel" required><span class="bar"></span>
                    <label for="tlf">Phone</label>
                </div>
                <button class="submit" type="submit">Subscribe</button>
            </div>
        </form>
    `;
  }

  static get styles() {
    return css`h2 {
  text-align: center;
  font-weight: bold;
  color: #96b8d4;
  font-size: 4rem;
}

form {
  background-color: #fff;
  padding: 4rem 2rem;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  max-width: 100%;
  width: 50rem;
}

.form {
  width: 100%;
}

.form-group {
  position: relative;
  margin: 4rem;
}

input {
  width: 100%;
  color: #000;
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  border: none;
  border-bottom: 4px solid #e8a9b0;
}

input:focus {
  outline: none;
  color: rgb(94, 93, 93);
}

label {
  font-size: 2.5rem;
  position: absolute;
  color: #49454567;
  left: 0.5rem;
  top: 1rem;
  top: 0;
  transition: 0.5s ease-in-out all;
  pointer-events: none;
}

input:focus ~ label,
input:valid ~ label {
  top: -2.5rem;
  font-size: 2rem;
  color: #9ab7d2;
}

.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar::before {
  content: "";
  height: 4px;
  width: 0%;
  bottom: 0;
  position: absolute;
  background: linear-gradient(270deg, #e8a9b0, #96b8d4);
  transition: 0.3s ease width;
  left: 0;
}

input:focus ~ .bar::before {
  width: 103%;
}

.submit {
  background: linear-gradient(270deg, #e8a9b0, #96b8d4);
  border: none;
  display: block;
  width: 80%;
  margin: 1rem auto;
  color: #fff;
  height: 5rem;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
}
`;
  }
}

customElements.define("form-us", Form);
