import {LitElement, html} from "@polymer/lit-element";
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

    get width() {
        return this.height * 16/9;
    }

    render() {
        return html`
          <style>
            .box {
                border: 1px solid gray;
                border-radius: 5px;
                overflow: hidden;
                position: relative;
          }
          video:-webkit-full-screen     { max-height: 100%; }
          video {
            width: 100%    !important;
            height: auto   !important;
          }
            .offscreen{
                position: absolute;
                left: -5000px;
            }
          </style>
          <div class="box" style="height: ${this.height}px; width: ${this.width}px" @click=${() => this.onClick()}>
            <img style="display:${this.isPlaying ? 'none' : 'auto'}" width=${this.width} height=${this.height} 
                src="https://img.youtube.com/vi/${this.src}/hqdefault.jpg"/>
                ${this.isPlaying ? html`
                <iframe id="frame" 
                style="visibility:${this.isPlaying ? 'visible' : 'hidden'}" 
                width=${this.width} 
                height=${this.height} 
                src="https://www.youtube.com/embed/${this.src}?rel=0&enablejsapi=1&origin=localhost&autoplay=1"></iframe>
                `: null}
            <paper-ripple></paper-ripple>
          </div>
        `;
    }

    onClick() {
        this.isPlaying = true;
        setTimeout(() => {
            let frame = this.shadowRoot.getElementById("frame");
            play(frame, this.src, this.height, this.width, () => {
                console.log('set isplaying to false for ' + this.src);
                this.isPlaying = false;
                // this.shadowRoot.removeChild(frame);
            })
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
