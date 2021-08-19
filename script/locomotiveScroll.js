import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    muliplier: 1,
});