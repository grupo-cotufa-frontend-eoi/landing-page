import { LitElement, html, css, unsafeCSS as unsafecss } from "lit-element";

class SecondaryButton extends LitElement {
  /*  constructor() {
    super();
    this.width = this.classList.contains("Registrer")
      ? "10rem"
      : "12rem";
  } */

  render() {
    return html`
      <button class="nav-main__link">
        <a href="">${this.getAttribute("value")}</a>
      </button>
    `;
  }

  static get styles() {
    return css`
    :host {
      --secondary: #ffc179;
    }

    a {
      text-decoration: none;
      color: #000;
      font-size: 2rem;
    }

    .nav-main__link {
      border-radius: 50px;
      padding: 1rem 2rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      border: transparent;
      background: var(--secondary);
    }
`;
  }
}

customElements.define("secondary-button", SecondaryButton);
