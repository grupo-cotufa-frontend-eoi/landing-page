import { LitElement, html, css } from "lit-element";

class About extends LitElement {
  render() {
    return html`
      <section>
          <div class="skewed">
            <slot></slot>
          </div>
      </section>
    `;
  }

  static get styles() {
    return css`
      .skewed {
        position: relative;
        width: 100%;
      }

      @media (max-width: 768px) {
        .skewed {
          height: 115rem;
        }
      }

      @media (max-width: 540px) {
        .skewed {
          height: 100rem;
        }
      }

      @media (max-width: 468px) {
        .skewed {
          height: 135rem;
        }
      }

`;
  }
}

customElements.define("about-us", About);
