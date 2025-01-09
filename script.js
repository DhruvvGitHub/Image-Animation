var tl = gsap.timeline({
    repeat: -1,  
    onStart: function() {
        gsap.set('.image-1', { left: '0%' });
        gsap.set('.image-2', { left: '30%' });
        gsap.set('.image-3', { left: '60%' });
    }
});

tl.to(".image", {
    duration: 1,
    ease: "power1.inOut",
    onStart: function() {
        document.querySelectorAll('.image').forEach(image => {
            let left = window.getComputedStyle(image).getPropertyValue('left');
            console.log(left);
            
            if (left === '0px') {
                gsap.to(image, { left: '60%', duration: 1 });
            } else if (left === '276.475px') {
                gsap.to(image, { left: '0%', duration: 1 });
            } else if (left === '552.95px') {
                gsap.to(image, { left: '30%',zIndex: 2, duration: 1 });
            }
        });
    },
    stagger: 0.5
});
