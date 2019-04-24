import {LitElement, html, css} from 'lit-element';
import "@polymer/paper-ripple";
import "./my-video";
import {until} from "lit-html/directives/until";


const idsPromise = fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50' +
    '&playlistId=PLn0kOTV0__XZlNhrnUsVzNzA6XAgSm2rh&key=AIzaSyDNad_BkgZoFz4PKwCLxEXwKM-fLA92dnk')
    .then(resp => resp.json())
    .then(v => v.items)
    .then(array => array.map(video => video.snippet.resourceId.videoId))
//.then(console.log);


const videos = idsPromise.then(ids => ids.map(id => html`<my-video class="box" src=${id}></my-video>`));

class MyApp extends LitElement {

    static get styles() {
        return css`
        :host { display:block; }
        .container {
          display: flex;
          align-items: center;
          flex-flow: nowrap;
          padding: 19px 0;
          overflow: scroll;
        }
        .container > .box {
          margin: 0 50px;
        }
        .box:last-child { border-right: 50px solid transparent;}
        `
    }

    render() {
        return html`<div class="container">${until(videos, html`...`)}</div>`;
    }
}

window.customElements.define('my-app', MyApp);
