import { LitElement, html, css } from "lit-element";

class Name extends LitElement {
  render() {
    return html`
        <h1 class="logo">
            <span class="logo__yellow">Yeka</span><span class="logo__blue ">Coins</span>
        </h1>
    `;
  }

  static get styles() {
    return css`
    .logo {
      font-size: 6rem;
      letter-spacing: 0.3rem;
      transform: translateX(-4rem);
    }

    .logo__blue {
      color: #2192fb;
      font-weight: 900;
    }

    .logo__yellow {
      color: #da7500;
      font-weight: 600;
    }

`;
  }
}

customElements.define("name-logo", Name);
