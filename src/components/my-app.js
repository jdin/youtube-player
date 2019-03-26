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
        this.videos = ["VwUOKdyWpdA", "6XUm9gLriKY", "6e1_IEhLNKk", "c_TkFeUnqt8", "CkyGNOAZOjM", "GEmywqDeygU",
            "hIiZKTLVPow", "y-Q5pC_8evU", "j_PVxQxnK5k"];//TODO get automatically
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
    </style>
    <div class="container">
      ${this.videos.map((src) => html`<my-video class="box" src=${src}></my-video>`)}
    </div>
    `;
    }
}

window.customElements.define('my-app', MyApp);
