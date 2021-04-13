import { LitElement, html, css } from "lit-element";

class About extends LitElement {
  render() {
    return html`
      <section>
        <div class="skewed">
          <h2 class="title-about blue-shadow">About us</h2>
          <div class="about-section">
            <div class="about-section__text">
              <p>In YekaCoin we are dedicated to manage data extracted from third party API's, to make information of a great variety of cryptocurrencies and work with this information to generate customized graphs and to be able to make comparisons between them. 
                We also work with news related to cryptos.</p>
            </div>
            <div class="about-section__profiles">
              <div class="profile">
                <img src="./nestor.jpg" alt="">
                <p>Néstor Torres</p>
                <a class="linkedin" href="https://www.linkedin.com/in/néstor-torres-díaz-8883b5198"><svg height="32pt" viewBox="0 0 512 512.00038" width="32pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="169.9940010834" x2="299.4934135904" y1="71.98622701" y2="349.0548448864"><stop offset="0" stop-color="#0077b5"/><stop offset="1" stop-color="#0066b2"/></linearGradient><linearGradient id="b"><stop offset="0" stop-color="#0066b2" stop-opacity="0"/><stop offset="1" stop-color="#07485e"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="364.2825237824" x2="-379.5864327114" xlink:href="#b" y1="314.0868361356" y2="-84.9521808166"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="256.0003" x2="256.0003" xlink:href="#b" y1="415.8267010284" y2="522.8344458318"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="271.3543834602" x2="79.916898849" xlink:href="#b" y1="273.7754525398" y2="82.3380683208"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="383.7494748922" x2="-1.7565731078" xlink:href="#b" y1="451.630876413" y2="270.924916413"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="477.5305473456" x2="208.9696664582" xlink:href="#b" y1="491.2543726544" y2="222.693491767"/><path d="m420.421875 503.234375c-109.503906 11.6875-219.339844 11.6875-328.84375 0-43.664063-4.660156-78.152344-39.148437-82.8125-82.816406-11.6875-109.503907-11.6875-219.335938 0-328.839844 4.660156-43.664063 39.148437-78.152344 82.8125-82.8125 109.503906-11.6875 219.335937-11.6875 328.839844 0 43.667969 4.660156 78.15625 39.148437 82.816406 82.8125 11.6875 109.503906 11.6875 219.335937 0 328.839844-4.660156 43.667969-39.144531 78.15625-82.8125 82.816406zm0 0" fill="url(#a)"/><path d="m475.386719 110.097656c-4.132813-38.746094-34.734375-69.351562-73.484375-73.488281-97.171875-10.367187-194.632813-10.367187-291.804688 0-38.746094 4.136719-69.351562 34.742187-73.488281 73.488281-10.367187 97.171875-10.367187 194.632813 0 291.800782 4.136719 38.75 34.742187 69.355468 73.488281 73.488281 97.171875 10.371093 194.632813 10.371093 291.800782 0 38.75-4.132813 69.355468-34.738281 73.488281-73.488281 10.371093-97.167969 10.371093-194.628907 0-291.800782zm0 0" fill="url(#c)"/><path d="m7.671875 409.804688c.351563 3.539062.714844 7.078124 1.09375 10.617187 4.660156 43.664063 39.148437 78.152344 82.816406 82.8125 109.503907 11.6875 219.335938 11.6875 328.839844 0 43.667969-4.660156 78.152344-39.148437 82.8125-82.8125.378906-3.539063.742187-7.078125 1.097656-10.617187zm0 0" fill="url(#d)"/><path d="m497.714844 443.570312-330.40625-330.410156c-7.378906-9.628906-18.988282-15.84375-32.054688-15.84375-22.289062 0-40.359375 18.066406-40.359375 40.355469 0 13.070313 6.21875 24.679687 15.847657 32.054687l329.257812 329.261719c26.613281-8.855469 47.824219-29.304687 57.714844-55.417969zm0 0" fill="url(#e)"/><path d="m169.152344 204.503906h-67.800782v210.179688l96.203126 96.203125c74.304687 2.8125 148.660156.269531 222.863281-7.652344 12.972656-1.382813 25.125-5.417969 35.9375-11.527344zm0 0" fill="url(#f)"/><path d="m399.410156 222.109375c-12.402344-13.597656-30.257812-22.128906-50.105468-22.128906-31.394532 0-51.65625 11.027343-63.714844 21.265625l-13.285156-16.742188h-62.472657v210.179688l96.492188 96.492187c38.054687-1.238281 76.09375-3.886719 114.097656-7.941406 43.667969-4.660156 78.152344-39.148437 82.8125-82.8125 3.117187-29.195313 5.394531-58.414063 6.847656-87.640625zm0 0" fill="url(#g)"/><g fill="#fff"><path d="m101.355469 204.503906h67.796875v210.179688h-67.796875zm0 0"/><path d="m349.304688 199.980469c-49.683594 0-71.507813 27.613281-77 36.019531v-31.496094h-62.472657v210.179688h67.800781v-105.574219c0-30.507813 14.042969-54.238281 40.679688-54.238281 26.632812 0 30.992188 29.539062 30.992188 65.863281v93.949219h67.800781v-146.902344c0-37.445312-30.355469-67.800781-67.800781-67.800781zm0 0"/><path d="m175.609375 137.675781c0 22.289063-18.066406 40.355469-40.355469 40.355469-22.289062 0-40.359375-18.066406-40.359375-40.355469 0-22.289062 18.070313-40.359375 40.359375-40.359375 22.289063 0 40.355469 18.070313 40.355469 40.359375zm0 0"/></g></svg></a>
              </div>
              <div class="profile">
                <img src="./adrian.jfif" alt="">
                <p>Adrian Duran</p>
                <a class="linkedin" href="https://www.linkedin.com/in/adrian-duran-gomez/"><svg height="32pt" viewBox="0 0 512 512.00038" width="32pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="169.9940010834" x2="299.4934135904" y1="71.98622701" y2="349.0548448864"><stop offset="0" stop-color="#0077b5"/><stop offset="1" stop-color="#0066b2"/></linearGradient><linearGradient id="b"><stop offset="0" stop-color="#0066b2" stop-opacity="0"/><stop offset="1" stop-color="#07485e"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="364.2825237824" x2="-379.5864327114" xlink:href="#b" y1="314.0868361356" y2="-84.9521808166"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="256.0003" x2="256.0003" xlink:href="#b" y1="415.8267010284" y2="522.8344458318"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="271.3543834602" x2="79.916898849" xlink:href="#b" y1="273.7754525398" y2="82.3380683208"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="383.7494748922" x2="-1.7565731078" xlink:href="#b" y1="451.630876413" y2="270.924916413"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="477.5305473456" x2="208.9696664582" xlink:href="#b" y1="491.2543726544" y2="222.693491767"/><path d="m420.421875 503.234375c-109.503906 11.6875-219.339844 11.6875-328.84375 0-43.664063-4.660156-78.152344-39.148437-82.8125-82.816406-11.6875-109.503907-11.6875-219.335938 0-328.839844 4.660156-43.664063 39.148437-78.152344 82.8125-82.8125 109.503906-11.6875 219.335937-11.6875 328.839844 0 43.667969 4.660156 78.15625 39.148437 82.816406 82.8125 11.6875 109.503906 11.6875 219.335937 0 328.839844-4.660156 43.667969-39.144531 78.15625-82.8125 82.816406zm0 0" fill="url(#a)"/><path d="m475.386719 110.097656c-4.132813-38.746094-34.734375-69.351562-73.484375-73.488281-97.171875-10.367187-194.632813-10.367187-291.804688 0-38.746094 4.136719-69.351562 34.742187-73.488281 73.488281-10.367187 97.171875-10.367187 194.632813 0 291.800782 4.136719 38.75 34.742187 69.355468 73.488281 73.488281 97.171875 10.371093 194.632813 10.371093 291.800782 0 38.75-4.132813 69.355468-34.738281 73.488281-73.488281 10.371093-97.167969 10.371093-194.628907 0-291.800782zm0 0" fill="url(#c)"/><path d="m7.671875 409.804688c.351563 3.539062.714844 7.078124 1.09375 10.617187 4.660156 43.664063 39.148437 78.152344 82.816406 82.8125 109.503907 11.6875 219.335938 11.6875 328.839844 0 43.667969-4.660156 78.152344-39.148437 82.8125-82.8125.378906-3.539063.742187-7.078125 1.097656-10.617187zm0 0" fill="url(#d)"/><path d="m497.714844 443.570312-330.40625-330.410156c-7.378906-9.628906-18.988282-15.84375-32.054688-15.84375-22.289062 0-40.359375 18.066406-40.359375 40.355469 0 13.070313 6.21875 24.679687 15.847657 32.054687l329.257812 329.261719c26.613281-8.855469 47.824219-29.304687 57.714844-55.417969zm0 0" fill="url(#e)"/><path d="m169.152344 204.503906h-67.800782v210.179688l96.203126 96.203125c74.304687 2.8125 148.660156.269531 222.863281-7.652344 12.972656-1.382813 25.125-5.417969 35.9375-11.527344zm0 0" fill="url(#f)"/><path d="m399.410156 222.109375c-12.402344-13.597656-30.257812-22.128906-50.105468-22.128906-31.394532 0-51.65625 11.027343-63.714844 21.265625l-13.285156-16.742188h-62.472657v210.179688l96.492188 96.492187c38.054687-1.238281 76.09375-3.886719 114.097656-7.941406 43.667969-4.660156 78.152344-39.148437 82.8125-82.8125 3.117187-29.195313 5.394531-58.414063 6.847656-87.640625zm0 0" fill="url(#g)"/><g fill="#fff"><path d="m101.355469 204.503906h67.796875v210.179688h-67.796875zm0 0"/><path d="m349.304688 199.980469c-49.683594 0-71.507813 27.613281-77 36.019531v-31.496094h-62.472657v210.179688h67.800781v-105.574219c0-30.507813 14.042969-54.238281 40.679688-54.238281 26.632812 0 30.992188 29.539062 30.992188 65.863281v93.949219h67.800781v-146.902344c0-37.445312-30.355469-67.800781-67.800781-67.800781zm0 0"/><path d="m175.609375 137.675781c0 22.289063-18.066406 40.355469-40.355469 40.355469-22.289062 0-40.359375-18.066406-40.359375-40.355469 0-22.289062 18.070313-40.359375 40.359375-40.359375 22.289063 0 40.355469 18.070313 40.355469 40.359375zm0 0"/></g></svg></a>
              </div>
            </div>
          </div>
        </div>  
      </section>
    `;
  }

  static get styles() {
    return css`
.skewed {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(270deg, #e8a9b0, #96b8d4);
  color: white;
  padding: 3rem;
  margin-bottom: 10rem;
}

.about-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 1500px) {
  .about-section {
    display: block;
  }
}

.about-section .about-section__text {
  flex-basis: calc(55% - 1rem);
  font-size: 3rem;
  line-height: 1;
  text-align: center;
}

.about-section .about-section__profiles {
  flex-basis: calc(35% - 1rem);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 2rem;
}

.about-section img {
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin: 2rem;
}

.title-about {
  text-align: center;
  font-size: 4rem;
  font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
  text-shadow:
    1px 1px 1px #000,
    3px 3px 5px blue;
}

.linkedin {
  opacity: 0.7;
  transition: opacity 0.5s;
}

.linkedin:hover {
  opacity: 1;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;
  }
}

customElements.define("about-us", About);
