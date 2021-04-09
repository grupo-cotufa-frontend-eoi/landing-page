import { LitElement, html, css } from "lit-element";

class BaseFooter extends LitElement {
  render() {
    return html`
    <footer class="footer-container">
        <div class="f-container footer-subcontainer">

            <div class="center-container">
                <div class="full-content">
                    <div class="column">
                        <span class="basic-header">Follow us</span>
                        <span class="marginY-two"><a href="#" class="row"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-square" class="svg-inline--fa fa-github-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg></a></span>
                        <span class="marginY-two"><a href="#" class="row"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" class="svg-inline--fa fa-twitter-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg></a></span>
                        <span class="marginY-two"><a href="#" class="row"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a></span>
                    </div>
                    <div class="column">
                        <span class="basic-header plus-header">Links</span>
                        <span class="marginY-two"><a href="#" class="row">link 1</a></span>
                        <span class="marginY-two"><a href="#" class="row">link 1</a></span>
                        <span class="marginY-two"><a href="#" class="row">link 1</a></span>
                    </div>
                    <div class="column">
                        <span class="basic-header plus-header">Legal</span>
                        <span class="marginY-two"><a href="#" class="row">Claim</a></span>
                        <span class="marginY-two"><a href="#" class="row">Privacy</a></span>
                        <span class="marginY-two"><a href="#" class="row">Terms</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="f-container footer-subcontainer">
            <div class="content-container">
                <div class="content-subcontainer">
                    <p class="content-subcontainer__paragraph">
                        © 2021 by Yekacoin 
                    </p>
                </div>
            </div>
        </div>
    </footer>
    `;
  }

  static get styles() {
    return css`
.footer-container {
  background: linear-gradient(270deg, #e8a9b0, #96b8d4);
  position: relative;
  padding-top: 0.25rem;
  border-bottom-width: 2px;
  border-color: var(--darkBlue);
}

.full-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem/* 32px */;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem/* 64px */;
  border-top-width: 2px;
  border-color: gray;
}

.content-subcontainer {
  text-align: center;
  padding-top: 1.5rem/* 24px */;
  padding-bottom: 1.5rem/* 24px */;
}

.content-subcontainer__paragraph {
  font-size: 2.3rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  color: grey;
  font-weight: 900;
  margin-bottom: 0.5rem/* 8px */;
}

@media (min-width: 640px) {
  .content-subcontainer {
    width: 66.666667%;
  }
}

@media (min-width: 640px) {
  .full-content {
    margin-top: 0;
  }
}

@media (min-width: 640px) {
  .full-content {
    width: 100%;
  }
}

@media (min-width: 640px) {
  .full-content {
    padding-left: 2rem/* 32px */;
    padding-right: 2rem/* 32px */;
  }
}

@media (min-width: 768px) {
  .full-content {
    flex-direction: row;
  }
}

.footer-subcontainer {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem/* 24px */;
}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  color: var(--lightBlue);
  font-size: 2rem;
  line-height: 1.5rem;
  transition: color 0.5s;
}

svg {
  width: 32px;
}

.row:hover {
  color: var(--marine);
}

.marginY-two {
  margin-top: 0.5rem/* 8px */;
  margin-bottom: 0.5rem/* 8px */;
}

.basic-header {
  font-size: 2.5rem;
  font-weight: 700;
  color: grey;
  text-transform: uppercase;
  margin-bottom: 0.5rem/* 8px */;
}

.plus-header {
  margin-top: 1rem/* 16px */;
}

@media (min-width: 768px) {
  .plus-header {
    margin-top: 0;
  }
}

@media (min-width: 640px) {
  .center-container {
    display: flex;
  }
}

@media (min-width: 640px) {
  .center-container {
    margin-top: 2rem/* 32px */;
  }
}

.f-container {
  width: 100%;
}

@media (min-width: 640px) {
  .f-container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .f-container {
    max-width: 768px;
  }
}

@media (min-width: 900px) {
  .f-container {
    max-width: 900px;
  }
}

@media (min-width: 1024px) {
  .f-container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .f-container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .f-container {
    max-width: 1536px;
  }
}

@media (min-width: 1600px) {
  .f-container {
    max-width: 1600px;
  }
}

`;
  }
}

customElements.define("base-footer", BaseFooter);
