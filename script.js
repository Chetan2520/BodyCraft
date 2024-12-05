gsap.to("#goal-parent h1",{
    transform : "translateX(-125%)",
    scrollTrigger:{
        trigger:"#goal-parent",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        pin:true,
        scrub:2
    }

})