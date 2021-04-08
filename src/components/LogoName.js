import { LitElement, html, css } from "lit-element";

class LogoName extends LitElement {
  render() {
    return html`
        <h1 class="logo">
            <span>Welcome to </span>
            <span class="logo__yellow">Yeka</span><span class="logo__blue ">Coin.</span>
        </h1>
    `;
  }

  static get styles() {
    return css`
    .logo {
      font-size: 4rem;
      font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
      text-shadow:
        1px 1px 1px #000,
        3px 3px 5px blue;
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

customElements.define("logo-name", LogoName);
