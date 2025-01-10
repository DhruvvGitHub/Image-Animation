var tl = gsap.timeline({
    repeat: -1,
    onStart: function() {
        gsap.set('.image-1', { left: '0%', scale: 0.6 });
        gsap.set('.image-2', { left: '30%', scale: 1.2 });
        gsap.set('.image-3', { left: '60%', scale: 0.6 });
    }
});

tl.to(".image", {
    duration: 1,
    ease: "power1.inOut",
    onStart: function() {
        document.querySelectorAll('.image').forEach(image => {
            // Get the left position in pixels
            let leftPx = parseFloat(window.getComputedStyle(image).getPropertyValue('left'));
            
            // Get the parent container's width
            let parentWidth = image.parentElement.offsetWidth;
            
            // Calculate the left value in percentage
            let leftPercentage = (leftPx / parentWidth) * 100;
            // console.log(leftPercentage);
            
            if (leftPercentage === 0) {
                gsap.to(image, { left: '60%', duration: 1.5, scale: 0.6, zIndex: 0 });
            } else if (leftPercentage > 29 & leftPercentage <= 31) {
                gsap.to(image, { left: '0%', duration: 1.55, scale: 0.6, zIndex: 1 });
            } 
            else if (leftPercentage > 59 & leftPercentage <= 61) {
                gsap.to(image, { left: '30%', zIndex: 5, duration: 1.5, scale: 1.1 });
            }
        });
    },
    stagger: 0.5
});