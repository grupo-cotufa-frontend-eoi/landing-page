import { LitElement, html, css } from "lit-element";

class Navbar extends LitElement {
  render() {
    return html`
      <header class="header-main">
        <a href="./index.html">
          <img class="logo" src="./assets/logo.png" alt="YekaCoin logo">
        </a>
        <slot></slot>
      </header>
    `;
  }

  static get styles() {
    return css`
    .header-main {
      background-color: #ffecd0;
      display: flex;
      justify-content: space-around;
    }

    img {
      width: 8rem;
      justify-self: flex-start;
      transform: rotate(15deg) scale(1.4);
      transition: 0.3s ease-in-out;
    }

    a:hover img {
      transform: rotate(0) scale(1);
    }
`;
  }
}

customElements.define("nav-bar", Navbar);
