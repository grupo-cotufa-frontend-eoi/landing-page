import { LitElement, html, css } from "lit-element";

class Service extends LitElement {
  render() {
    return html`
    <div class="card-container">
        <div class="card-item">
            <figure class="card-img">
                <img class="card-picture" src="" alt="">
            </figure>
            <h3 class="card__title">Lorem ipsum dolor sit amet</h3>
            <p class="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt repellat vitae iste atque rerum est voluptatibus quos alias, cumque ullam fugit vero similique nobis tenetur nostrum officia, corrupti eum!</p>
        </div>
        <div class="card-item">
            <figure class="card-img">
                <img class="card-picture" src="" alt="">
            </figure>
            <h3 class="card__title">Lorem ipsum dolor sit amet</h3>
            <p class="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt repellat vitae iste atque rerum est voluptatibus quos alias, cumque ullam fugit vero similique nobis tenetur nostrum officia, corrupti eum!</p>
        </div>
        <div class="card-item">
            <figure class="card-img">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-bar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="12" width="6" height="8" rx="1" />
                    <rect x="9" y="8" width="6" height="12" rx="1" />
                    <rect x="15" y="4" width="6" height="16" rx="1" />
                    <line x1="4" y1="20" x2="18" y2="20" />
                </svg>
            </figure>
            <h3 class="card__title">Lorem ipsum dolor sit amet</h3>
            <p class="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt repellat vitae iste atque rerum est voluptatibus quos alias, cumque ullam fugit vero similique nobis tenetur nostrum officia, corrupti eum!</p>
        </div>
        <div class="card-item">
            <figure class="card-img">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                <line x1="8" y1="8" x2="12" y2="8" />
                <line x1="8" y1="12" x2="12" y2="12" />
                <line x1="8" y1="16" x2="12" y2="16" />
            </svg>
            </figure>
            <h3 class="card__title">Lorem ipsum dolor sit amet</h3>
            <p class="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt repellat vitae iste atque rerum est voluptatibus quos alias, cumque ullam fugit vero similique nobis tenetur nostrum officia, corrupti eum!</p>
        </div>
    </div>
    `;
  }

  static get styles() {
    return css`
  .card-container {
    height: 100%;
    margin: 0 auto;
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 50px;
    grid-template-areas:
      ".      card1  ."
      "card2  card1  card3"
      "card2  card4  card3"
      ".      card4  .     ";
  }

  @media (max-width: 1000px) {
    .card-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-template-areas:
        "card1 ."
        "card1 card2"
        "card3 card2"
        "card3 card4"
        ". card4";
    }
  }

  @media (max-width: 600px) {
    .card-container {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
        "card1"
        "card2"
        "card3"
        "card4";
    }
  }

  .card-item {
    background: #96b8d4;
    border-radius: 0.5rem;
    padding: 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-item:nth-last-of-type(1) {
    grid-area: card1;
  }

  .card-item:nth-last-of-type(2) {
    grid-area: card2;
  }

  .card-item:nth-last-of-type(3) {
    grid-area: card3;
  }

  .card-item:nth-last-of-type(4) {
    grid-area: card4;
  }

  .card-img {
    background: #e8a9b0;
    margin-top: 2rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card__title {
    margin: 2rem;
    font-size: 3.5rem;
    color: #fff;
  }

  .card__paragraph {
    color: #fff;
    font-weight: 900;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-align: justify;
  }
`;
  }
}

customElements.define("service-page", Service);
