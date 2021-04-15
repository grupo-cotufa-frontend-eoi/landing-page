import { LitElement, html, css } from "lit-element";

class Navbar extends LitElement {
  render() {
    return html`
      <header class="header-main">
        <a href="./index.html">
          <img class="logo" src="/logo-yekacoin.webp" alt="YekaCoin logo">
        </a>
        <slot></slot>
      </header>
    `;
  }

  static get styles() {
    return css`
    .header-main {
      width: 100%;
      display: flex;
      justify-content: space-around;
      box-shadow: 5px 5px 0 #a5c3de, -5px -5px 0 #d7fdff;
      opacity: 0.7;
    }

    img {
      width: 11rem;
      justify-self: flex-start;
    }
`;
  }
}

customElements.define("nav-bar", Navbar);
