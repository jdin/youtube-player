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
        this.videos = ["5R93ozDDPBQ", "X8JTgQvKZoA", "0YFnl3Sz1Dw", "KSzXzBGBw3M", "meAXdl8p_-A",
            "DXtl8FjAQXo", "AqardKbxVYM", "NBk0H-xTyJw", "bTAmiPvYmPk", "NlvsoWv5ZvE",
            "7eb_7F1zUW0", "h8ckFCZg5fE", "vIUiT0OStVo", "67FJ30wsG28",
            "2Gtql73FnPE"];//TODO get automatically
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
