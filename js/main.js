let musicaFc = new Howl({
    src: ['/sound/cumpleaños.mp3'],
    autoplay: false,
    volume: .2,
});

window.addEventListener('load', () => {
    musicaFc.play();
})