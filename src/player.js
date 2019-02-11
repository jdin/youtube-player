let player = null;

let prevCallback;

export function play(frame, videoId, height, width, stopRequestCallback) {
    console.dir("play for " + videoId);
    if (player) {
        prevCallback();
        // player.stopVideo();
    }

    prevCallback = stopRequestCallback;

    player = new YT.Player(frame, {
        // height: height,
        // width: width,
        // videoId: videoId,
        events: {
            'onReady': () => {
                console.log('here');
                console.log(player);
                player.playVideo();
            }
        }
    });
}

