import { LitElement, html, css } from "lit-element";

class SecondaryButton extends LitElement {
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
      font-family: "Advent Pro", sans-serif;
    }

    .nav-main__link {
      border-radius: 50px;
      padding: 1rem 2rem;
      box-shadow: 5px 5px 0 #a5c3de, -5px -5px 0 #d7fdff;
      border: 2px solid var(--darkBlue);
      background: var(--secondary);
    }

    .nav-main__link:hover {
      background: var(--primary);
      border: 2px solid var(--marine);
    }
`;
  }
}

customElements.define("secondary-button", SecondaryButton);
