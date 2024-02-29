gsap.timeline({
    scrollTrigger: {
        trigger: '[data-trigger="section"]',
        pin: true,
        start: "center center",
        end: "bottom top",
        scrub: 3,
    }
})
.from('[data-animation="card--1"]', { y: -innerHeight, scale: 0, opacity: 0 })
.from('[data-animation="card--2"]', { y: -innerHeight, scale: 0, opacity: 0 })
.to('[data-animation="card--1"]', { rotate: -11, opacity: 0.2 })
.from('[data-animation="card--3"]', { y: -innerHeight, scale: 0, opacity: 0 })
.to('[data-animation="card--2"]', { rotate: -11, opacity: 0.2 })
.from('[data-animation="card--4"]', { y: -innerHeight, scale: 0, opacity: 0 })
.to('[data-animation="card--3"]', { rotate: -11, opacity: 0.2 })
.to('[data-animation="section"]', { backgroundColor: '#C1CAB5' })
.from('[data-animation="card--5"]', { y: -innerHeight, scale: 0, opacity: 0 })
.to('[data-animation="card--4"]', { rotate: -11, opacity: 0.2 })
.from('[data-animation="shape--left"]', { x: '50%', rotate: 20, opacity: 0 })
.from('[data-animation="shape--right"]', { x: '-50%', scale: 0, opacity: 0 })