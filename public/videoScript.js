$("#myVideo").load(function () {
  alert("video is load");
});
var overrideNative = false;

var player = videojs("myVideo", {
  html5: {
    hls: {
      overrideNative: overrideNative,
    },
    nativeVideoTracks: !overrideNative,
    nativeAudioTracks: !overrideNative,
    nativeTextTracks: !overrideNative,
  },
});
player.play();
