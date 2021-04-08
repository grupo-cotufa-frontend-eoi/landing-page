import { LitElement, html, css } from "lit-element";

class Navbar extends LitElement {
  render() {
    return html`
      <header class="header-main">
        <a href="./index.html">
          <img class="logo" src="/logo.png" alt="YekaCoin logo">
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
      border-bottom: 2px var(--darkBlue);
      box-shadow: 5px 5px 0 #a5c3de, -5px -5px 0 #d7fdff;
    }

    img {
      width: 9rem;
      justify-self: flex-start;
      transition: 0.3s ease-in-out;
    }
`;
  }
}

customElements.define("nav-bar", Navbar);
