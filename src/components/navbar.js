import { LitElement, html, css } from "lit-element";

class Navbar extends LitElement {
  render() {
    return html`
      <header class="header-main">
        <h1>hola</h1>
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

.nav-main {
  display: flex;
  gap: 2px;
  align-items: center;
}
`;
  }
}

customElements.define("nav-bar", Navbar);
