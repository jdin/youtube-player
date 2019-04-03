let player = null;

let prevCallback;

export function play(frame, videoId, height, width, stopRequestCallback) {
    console.log("play for " + videoId, 'player', player, frame);
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
                console.log('ready');
                player.playVideo();
                console.log('started');
                // TODO frame is wrong now
                const requestFullScreen = frame.requestFullScreen || frame.mozRequestFullScreen || frame.webkitRequestFullScreen;
                if (requestFullScreen) {
                    console.log('request fullscreen');
                    //requestFullScreen.bind(frame)();
                }
            }  ,
            'onStateChange': (event) => {
                console.log('state change; playing=', event.data === YT.PlayerState.PLAYING)
            }
        }
    });
}

