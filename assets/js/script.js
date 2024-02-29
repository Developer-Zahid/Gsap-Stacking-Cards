let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '[data-trigger="section"]',
        pin: true,
        // markers: true,
        start: "center center",
        end: "bottom top",
        scrub: 3,
    }
});

const animationData = [
    { element: 'card--1', rotate: -11 },
    { element: 'card--2', rotate: -11 },
    { element: 'card--3', rotate: -11 },
    { element: 'card--4', rotate: -11 },
    { element: 'card--5', rotate: -11 }
];

animationData.forEach((data, index) => {
    const target = `[data-animation="${data.element}"]`;
    const prevTarget = index === 0 ? null : `[data-animation="${animationData[index - 1].element}"]`;
    const nextTarget = index === animationData.length - 1 ? null : `[data-animation="${animationData[index + 1].element}"]`;

    tl.from(target, { y: -innerHeight, scale: 0, opacity: 0 });
    
    if (prevTarget) {
        tl.to(prevTarget, { rotate: data.rotate, opacity: 0.2 });
    }

    if (!nextTarget) {
        tl.to('[data-animation="section"]', { backgroundColor: '#C1CAB5' });
        tl.from('[data-animation="shape--left"]', { x: '50%', rotate: 20, opacity: 0, duration: 0.5 });
        tl.from('[data-animation="shape--right"]', { x: '-50%', scale: 0, opacity: 0, duration: 0.5 });
    }
});