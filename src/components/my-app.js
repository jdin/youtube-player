import {html, LitElement} from '@polymer/lit-element';
import "@polymer/paper-ripple";
import "./my-video";

class MyApp extends LitElement {

    static get properties() {
        return {
            videos: Array
        }
    }

    constructor() {
        super();
        this.videos = ["-fnOyKtia6U", "BuF4hfz86W4", "gJBt3GBWQvc", "H2i6y_8W-6o",
            "_-EFvlwjNDY", "dA-e0C9KlEw", "qEWJUTX1LP0", "vz2BUBuGfJw", "FnBVM9dppd4",
            "wg3aDEgPfMM", "BSLXQhXhMYk", "90pOcRLSW1Q", "EeKSs8JNcgw", "iBqVzQfj7g0",
            "pl2acnQycxs"];//TODO get automatically
    }

    render() {
        return html`
    <style>
      .container {
        display: flex;
        align-items: center;
        flex-flow: nowrap;
      }
      .container > * {
        margin: 16px;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {

      }
    </style>
    <div class="container">
      ${this.videos.map((src) => html`<my-video class="box" src=${src}></my-video>`)}
    </div>
    `;
    }
}

window.customElements.define('my-app', MyApp);
