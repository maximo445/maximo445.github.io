const barba = require('@barba/core');
const barbaCSS = require('@barba/css');

barba.use(barbaCSS);

// cancel the white showing between transitions

// const body = document.querySelector('body');

// barba.hooks.before((data) => {
//     const background = data.current.container.dataset.background;
//     body.style.setProperty('background', background);
// });

barba.init({
    transitions: [
        {
            once(){}
        },{
            name: 'about',
            to: {
                namespace: ['about']
            },
            leave(){},
            enter(){}
        },
        {
            name: 'portfolio',
            once(){},
            // leave and enter happen at the same time using sync
            sync: true,
            to: {
                namespace: ['portfolio']
            },
            leave(){},
            enter(){}
           
        },
        {
            name: 'blog',
            to: {
                namespace: ['blog']
            },
            leave(){},
            enter(){}
           
        }
    ]
})