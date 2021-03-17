import { LitElement, html, css } from "lit-element";

class About extends LitElement {
  render() {
    return html`
      <section>
          <div class="skewed">
            <slot></slot>
            <div class="triangule"></div>
          </div>
      </section>
    `;
  }

  static get styles() {
    return css`
      .skewed {
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        background: #94cbff;
        z-index: 0;
      }

      .triangule {
        position: absolute;
        width: 0;
        height: 0;
        bottom: 0;
        border-left: 160rem solid #fff;
        border-top: 18rem solid transparent;
      }

      @media (max-width: 768px) {
        .skewed {
          height: 102rem;
        }
      }

      @media (max-width: 468px) {
        .skewed {
          height: 160rem;
        }
      }

`;
  }
}

customElements.define("about-us", About);
