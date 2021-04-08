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
      color: grey;
      font-size: 2rem;
      font-family: "Advent Pro", sans-serif;
    }

    .nav-main__link {
      border-radius: 50px;
      padding: 1rem 2rem;
      box-shadow: 0 0 0 #a2bed9, -5px -5px 0 #dbffff;
      border: 2px solid var(--marine);
      background: var(--darkBlue);
    }

    .nav-main__link:hover {
      background: var(--marine);
      border: 2px solid var(--darkBlue);
      color: white;
    }

    .nav-main__link:hover a {
      color: white;
    }
`;
  }
}

customElements.define("secondary-button", SecondaryButton);
