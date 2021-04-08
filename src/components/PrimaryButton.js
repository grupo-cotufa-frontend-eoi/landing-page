import { LitElement, html, css } from "lit-element";

class PrimaryButton extends LitElement {
  render() {
    return html`
      <button class="nav-main__link">
        <a href="#hola">${this.getAttribute("value")}</a>
      </button>
    `;
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
        color: #000;
        font-size: 2rem;
        font-family: "Advent Pro", sans-serif;
      }

      .nav-main__link {
        border-radius: 50px;
        padding: 1rem 2rem;
        box-shadow: 5px 5px 0 #145b9c, -5px -5px 0 #2ec9ff;
        border: 2px solid var(--turquoise);
        background: var(--lightBlue);
      }

      .nav-main__link:hover {
        background: var(--turquoise);
        border: 2px solid var(--marine);
      }
`;
  }
}

customElements.define("primary-button", PrimaryButton);
