import {LitElement, html, css} from "lit-element";
import "@polymer/paper-ripple";
import {play} from "../player";

export class MyVideo extends LitElement {

    constructor() {
        super();
        this.height = 320;
        this.src = null;
        this.isPlaying = false;
    }

    static get properties() {
        return {
            height: Number,
            src: String,
            isPlaying: Boolean
        };
    }

    static get styles() {
        return css`
          :host { display:block; }
          video:-webkit-full-screen     { max-height: 100%; }
          video {
            width: 100%    !important;
            height: auto   !important;
          }
            .offscreen{
                position: absolute;
                left: -5000px;
            }
        `;
    }

    get width() {
        return this.height * 16/9;
    }

    render() {
        return html`
          <div class="box" style="height: ${this.height}px; width: ${this.width}px" @click=${() => this.onClick()}>
            <img style="display:${this.isPlaying ? 'none' : 'auto'}" width=${this.width} height=${this.height} 
                src="https://img.youtube.com/vi/${this.src}/hqdefault.jpg"/>
                ${this.isPlaying ? html`
                <div id="frame" 
                style="visibility:${this.isPlaying ? 'visible' : 'hidden'}" 
                ></div>
                `: null}
            <paper-ripple></paper-ripple>
          </div>
        `;
    }

    onClick() {
        this.isPlaying = true;
        setTimeout(() => {
            let frame = this.shadowRoot.getElementById("frame");
            play(frame, this.src, this.height, this.width, () => this.isPlaying = false)
        });
    }

    firstUpdated(props) {
        this.height = window.document.body.clientHeight - 40;
        window.addEventListener('resize', () => {
            this.height = window.document.body.clientHeight - 40;
        });
    }
}

customElements.define("my-video", MyVideo);
