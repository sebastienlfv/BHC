new fullpage('main', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['#page1', '#page2', '#page3'],
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});