import { LitElement, html, css, unsafeCSS as unsafecss } from "lit-element";

class SecondaryButton extends LitElement {
  /*     this.width = this.classList.contains("Registrer")
      ? newLocal
      : "12rem"; */

  render() {
    return html`
      <button class="nav-main__link">
        <a href="">${this.getAttribute("value")}</a>
      </button>
    `;
  }

  static get styles() {
    return css`
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
        background: #ffc179;
      }
`;
  }
}

customElements.define("secondary-button", SecondaryButton);
