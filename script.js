
function mousemoving() {
    var cursor = document.querySelector("#cursor");
    var main = document.querySelector("main");

    main.addEventListener("mousemove", (hello) => {
        gsap.to(cursor, {
            x: hello.x + 5,
            y: hello.y + 5, 
            duration: .9,
            ease: "back.out",
        });
    });

    main.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            opacity: 1,
        })
    })
    main.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            opacity: 0,
        })
    })
}
mousemoving();

function menuBar() {

    var tl = gsap.timeline();
    var menu = document.querySelector(".menu");
    var cross = document.querySelector(".cross");

    tl.to("#full", {
        right: "0",
        ease: "back.out",
        duration: 1,
    })
    tl.from("h4", {
        x: 100,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0
    })
    tl.from(cross, {
        opacity: 0,
        duration: .2,
    })
    tl.pause();
    menu.addEventListener("click", () => {
        tl.play();
    })
    cross.addEventListener("click", () => {
        tl.reverse();
    })
}
menuBar();

function morphSVG() {
    var final = d = "M166.4 -190.1C191.4 -141.4 170.7 -70.7 162.5 -8.2C154.2 54.2 158.4 108.4 133.4 133.6C108.4 158.8 54.2 154.9 0.2 154.6C-53.7 154.4 -107.5 157.8 -145.5 132.6C-183.5 107.5 -205.7 53.7 -213.2 -7.4C-220.6 -68.6 -213.2 -137.2 -175.2 -185.8C-137.2 -234.5 -68.6 -263.3 1.1 -264.3C70.7 -265.4 141.4 -238.8 166.4 -190.1";
    gsap.to("#start", {
        duration: 5,
        attr: { d: final },
        repeat: -1,
        y: 100,
        x: 200,
        rotate: 30,
        yoyo: true,
        ease: "none",
    });
}
morphSVG();

function cuttingText(){
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".cut",
            start: "50% 50%",
            end: "100% 50%",
            scrub: 2,
            pin: true,
        }
    });
    
    tl1.to(".top", {
        top: "-50%",
        opacity: 0,
    }, 'a')
        .to(".bottom", {
            bottom: "-50%",
            opacity: 0,
    
        }, 'a')
    
    tl1.to(".top h1", {
        bottom: "10%",
    }, 'a')
        .to(".bottom h1", {
            bottom: "-10%",
        }, 'a')
}
cuttingText();

function rounded(){
    var tl2 = gsap.timeline({scrollTrigger:{
        trigger: ".Tips",
        start:"0% 70%",
        end:"50% 50%",
        scrub:true,
    }})
    tl2.to(".rounded-wrap",{
        height:0,
        marginTop:0,
    })
}
rounded();

function Tips(){
    let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: ".content",
            start:"50% 50%",
            end: "200% 50%",
            pin: true,
            scrub: 1,
        },  
    });
    tl4.to(".c1",{
        marginTop: "-25%",
        opacity:"1",
    }, 'sct-1')
    tl4.to(".c2",{
        opacity:"1",
    }, 'sct-2')
    tl4.to(".c1",{
        marginTop: "-100",
        opacity:"0",
    }, 'sct-2')
    tl4.to(".c3",{
        opacity:"1",
    }, 'sct-3')
    tl4.to(".c2",{
        opacity:"0",
    }, 'sct-3')
    tl4.to(".c1",{
        marginTop:"-180%",
    }, 'sct-3')
    tl4.to(".c1",{
        marginTop:"-230%",
    }, 'sct-4')
    tl4.to(".c3",{
        opacity:"0",
    }, 'sct-4')
}
Tips();


