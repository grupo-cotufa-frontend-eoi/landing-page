import { LitElement, html, css } from "lit-element";

class PrimaryButton extends LitElement {
  render() {
    return html`
      <button class="nav-main__link home">
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
        background: #fff4e2;
      }
`;
  }
}

customElements.define("primary-button", PrimaryButton);
