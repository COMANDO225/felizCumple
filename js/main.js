let musicaFc = new Howl({
    src: ['/sound/music.mp3'],
    autoplay: false,
});

window.addEventListener('load', () => {
    musicaFc.play();
})