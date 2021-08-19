var tl = gsap.timeline({});
tl.from('.hide-text', {
    y: "100%",
    ease: "Power4.easeOut",
    duration: 2.5,
});
tl.from('.script-text', {
    opacity: "0",
    ease: "Power4.easeOut",
    duration: 2.5

}, "-=2.4")