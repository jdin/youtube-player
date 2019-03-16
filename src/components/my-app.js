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
        this.videos = ["HxbEiuJvLrA", "O_7O-enyQ30", "YlqombdIprY", "3hNzjiGzUNc", "h_pVierzRNI", "alBUJk2rVKk", "oGRrTdbzPHE"];//TODO get automatically
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
