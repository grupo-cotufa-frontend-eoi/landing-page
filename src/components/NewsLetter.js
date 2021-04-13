import { LitElement, html, css } from "lit-element";

class Star extends LitElement {
  render() {
    return html`
    <div class="wrapper">
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>

    <div class="subscribe-container">
        <p class="title">subscribe now</p>
        <p class="message">Subscribe to get the latest <span>news & updates.</span></p>

        <form>
            <button class="submit"><a href="a href="https://tinyletter.com/adgomez94">Subscribe</a></button>
        </form>
    </div>
</div>
    `;
  }

  static get styles() {
    return css`
  a {
    text-decoration: none;
    color: #fff;
  }

  .wrapper {
    width: 390px;
    box-shadow: 0 8px 35px -8px rgba(6, 68, 129, 0.2);
    position: relative;
    overflow: hidden;
    padding: 5px;
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    .wrapper {
      width: 95%;
    }
  }

  .subscribe-container {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .title {
    text-transform: uppercase;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  .message {
    text-align: center;
    margin-bottom: 25px;
    line-height: 22px;
    color: #747e8a;
  }

  .message span {
    color: #f66778;
  }

  form {
    width: 100%;
    position: relative;
  }

  form input,
  form button {
    width: 100%;
    padding: 14px 0;
    outline: none;
  }

  form input {
    color: #333;
    border: 1px solid #a4a4a4;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 1em;
    margin-bottom: 15px;
    transition: border-color 0.5s;
  }

  form input:focus {
    border-color: #333;
  }

  form button {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 1px;
    cursor: pointer;
    color: #fff;
    background-color: #da7500;
    border-radius: 4px;
    border: none;
    transition: background-color 0.3s;
  }

  form button:hover {
    background-color: #9f75da;
  }

  .border-top,
  .border-right,
  .border-bottom,
  .border-left {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 100%;
    transform-origin: top left;
    animation: rotateTop linear 8s infinite;
  }

  .border-top {
    background-color: #96b8d4;
    transform: rotate(0deg);
    animation-name: rotationTop;
  }

  .border-right {
    background-color: #e8a9b0;
    transform: rotate(-90deg);
    animation-name: rotationRight;
  }

  .border-bottom {
    background-color: #50bda1;
    transform: rotate(-180deg);
    animation-name: rotationBottom;
  }

  .border-left {
    background-color: #f18867;
    transform: rotate(-270deg);
    animation-name: rotationLeft;
  }

  @keyframes rotationTop {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotationRight {
    to {
      transform: rotate(270deg);
    }
  }

  @keyframes rotationBottom {
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes rotationLeft {
    to {
      transform: rotate(90deg);
    }
  }
`;
  }
}

customElements.define("new-letter", Star);
