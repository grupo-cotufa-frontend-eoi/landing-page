import { LitElement, html, css } from "lit-element";

class LogoName extends LitElement {
  render() {
    return html`
        <h1 class="logo">
            <span class="logo__yellow">Yeka</span><span class="logo__blue ">Coin</span>
        </h1>
    `;
  }

  static get styles() {
    return css`
    .logo {
      font-size: 3rem;
      letter-spacing: 0.3rem;
      transform: translateX(3rem) translateY(2rem);
      font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
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
