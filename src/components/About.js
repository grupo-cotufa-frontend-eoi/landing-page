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
        width: 100%;
        background: linear-gradient(185deg, #94cbff 75%, white 76%);
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
