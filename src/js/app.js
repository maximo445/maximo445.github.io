import gsap from "gsap";
const barba = require('@barba/core');

function checkSectionInView(sections) {
    console.log('function called');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top + 200 < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
            //intro section
            const left = section.querySelector('.about-text');
            const right = section.querySelector('.about-image');
            const photos = section.querySelector('.photo');
            // skills section
            const centerUp = section.querySelector('.center-up');
            //about story section
            const leftAboutStory = section.querySelector('#about-story .left');
            const rightAboutStory = section.querySelector('#about-story .right');
            if(left && right) {
                setTimeout(() => {
                    left.classList.add('fadeIn');
                    right.classList.add('fadeIn');
                    setTimeout(() => {
                        photos.classList.add('fadeIn');                        
                    }, 600);
                }, 100);                    
            } else if (centerUp) {
                centerUp.classList.add('fadeIn-Up');
            } else if (leftAboutStory && rightAboutStory) {
                leftAboutStory.classList.add('fadeIn-vertical');
                rightAboutStory.classList.add('fadeIn');
            }
        } // else {
        //     if(left && right) {
        //         left.classList.remove('fadeIn');
        //         right.classList.remove('fadeIn');
        //         console.log('fade out');
        //     }
        // }
    });
}

const loader = document.querySelector('.loader');

barba.hooks.before(() => {
    document.querySelector('html').classList.add('is-transitioning');
})

barba.hooks.after(() => {
    document.querySelector('html').classList.remove('is-transitioning');
})

const loaderIn = () => {
    return gsap.fromTo(loader, {
        rotation: 10, 
        scaleX: 0, 
        xPercent: -5
    }, 
    {
        duration: 0.8,
        xPercent: 0, 
        scaleX: 1,
        rotation: 0, 
        ease: 'power4.inOut', 
        transformOrigin: 'left center'
    });
}

const loaderAway = () => {
    return gsap.to(loader, {
        duration: 0.8,
        scaleX: 0,
        xPercent: 5,
        rotation: -10,
        transformOrigin: 'right center',
        ease: 'power4.inOut'
    });
}

gsap.set('.loader', {
    scaleX: 0,
    rotation: 10,
    xPercent: -5,
    yPercent: -50,
    transformOrigin: 'left center',
    autoAlpha: 1
});

// barba.init({
//     transitions: [{
//         async leave() {
//             await loaderIn();
//         },
//         enter({current}) {
//             loaderAway();
//             console.log(current);
//         }
//     }]
// });

document.addEventListener("DOMContentLoaded", function() {

    const sections = document.querySelectorAll("section"); // Get all sections

    // Attach the event listener to scroll

    const scroller = window.addEventListener("scroll", () => {
            checkSectionInView(sections);
    });

    window.addEventListener("resize", () => {
        checkSectionInView(sections);
    });

    // Initial check when the page loads
    checkSectionInView(sections);
});

