let musicaFc = new Howl({
    src: ['/sound/music.mp3'],
    html5: true,
});

window.addEventListener('load', () => {
    musicaFc.play();
})