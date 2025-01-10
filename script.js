var tl = gsap.timeline({
    repeat: -1,
    onStart: function() {
        gsap.set('.image-1', { left: '0%', scale: 0.5 });
        gsap.set('.image-2', { left: '30%' });
        gsap.set('.image-3', { left: '60%', scale: 0.5 });
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
            console.log(parentWidth);
            
            // Calculate the left value in percentage
            let leftPercentage = (leftPx / parentWidth) * 100;
            // console.log(leftPercentage);
            
            if (leftPercentage === 0) {
                gsap.to(image, { left: '60%', duration: 1, scale: 0.5, zIndex: 1 });
            } else if (leftPercentage > 29 & leftPercentage <= 31) {
                gsap.to(image, { left: '0%', duration: 1, scale: 0.5, zIndex: 1 });
            } 
            else if (leftPercentage > 59 & leftPercentage <= 61) {
                gsap.to(image, { left: '30%', zIndex: 2, duration: 1, scale: 1 });
            }
        });
    },
    stagger: 0.5
});