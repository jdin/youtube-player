let player = null;

let prevCallback;

const setFullscreen = doc => {
    const requestFullScreen = doc.requestFullScreen || doc.mozRequestFullScreen || doc.webkitRequestFullScreen;
    if (requestFullScreen) {
        requestFullScreen.call(doc);
    }
};

const cancelFullscreen = doc => {
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    if (cancelFullScreen) {
        cancelFullScreen.call(doc);
    }
};

export function play(frame, videoId, height, width, stopRequestCallback) {
    if (player) {
        player.stopVideo();
        prevCallback();
        // player.stopVideo();
    }

    prevCallback = stopRequestCallback;

    player = new YT.Player(frame, {
        height: height,
        width: width,
        videoId: videoId,
        events: {
            'onReady': (e) => {
                player = e.target;
                player.playVideo();
                setFullscreen(e.target.a);
            },
            'onStateChange': (event) => {
                if (event.data === YT.PlayerState.PLAYING) {
                    setFullscreen(event.target.a);
                } else if (event.data === 2) {
                    cancelFullscreen(window.document);
                }
            }
        }
    });
}

