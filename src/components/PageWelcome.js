import { LitElement, html, css } from "lit-element";

class PageWelcome extends LitElement {
  render() {
    return html`
        <h1 class="logo">
            <span>Welcome to </span>
            <span class="logo__yellow">Yeka</span><span class="logo__blue ">Coin.</span>
        </h1>
        <p class="welcome-paragraph">We provide you information, comparisons and charts on hundreds of cryptocurrencies, so you can get wherever you want to.</p>
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

    .welcome-paragraph {
      font-size: 5rem;
      text-align: right;
    }
`;
  }
}

customElements.define("page-welcome", PageWelcome);
