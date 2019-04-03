import {LitElement, html} from 'lit-element';
import "@polymer/paper-ripple";
import "./my-video";
import { until} from "lit-html/directives/until";


const idsPromise = fetch('https://www.googleapis.com/youtube/v3/search?part=id' +
    '&channelId=UChEqdYH7NbCgE9aRJuACL3w&maxResults=50&type=video' +
    '&publishedAfter=2019-04-03T00%3A00%3A00Z' +
    '&key=AIzaSyDNad_BkgZoFz4PKwCLxEXwKM-fLA92dnk')
    .then(resp => resp.json())
    .then(v => v.items)
    .then(array => array.map(video => video.id.videoId))
    //.then(console.log);


const videos = idsPromise.then( ids => ids.map(id => html`<my-video class="box" src=${id}></my-video>`));

const wakeLock = async () => {
    if ('getWakeLock' in navigator) {
        try {
            // Create a wake lock for the type we want.
            const wakeLockObj = await navigator.getWakeLock('screen');
            console.log('👍', 'getWakeLock', wakeLockObj);
            wakeLockObj.createRequest();
        } catch (ex) {
            console.error('👎', 'getWakeLock', err);
        }
    } else {
        console.log('no wakelock')
    }
};

wakeLock();

class MyApp extends LitElement {
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
      ${until(videos, html`...`)}
    </div>
    `;
    }
}

window.customElements.define('my-app', MyApp);
