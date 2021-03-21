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
        background: linear-gradient(185deg, #94cbff 85%, white 86%);
      }

      .triangule {
        position: absolute;
        bottom: 0;
        border-left: 160rem solid #fff;
        border-top: 18rem solid transparent;
      }

      @media (max-width: 768px) {
        .skewed {
          height: 100rem;
        }
      }

      @media (max-width: 540px) {
        .skewed {
          height: 100rem;
        }
      }

      @media (max-width: 468px) {
        .skewed {
          height: 120rem;
        }
      }

`;
  }
}

customElements.define("about-us", About);
