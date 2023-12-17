$(document).ready(function() {
    $('#button').click(function(event) {
        let video = $('#vid');
        let autoplayValue = video.attr('src').includes('autoplay=1') ? '0' : '1';
        video.attr('src', `${video.attr('src').split('&autoplay=')[0]}&autoplay=${autoplayValue}`);
        console.log(autoplayValue);
    });
});

// Function, on click of the button it plays the video, on a second click it stops the video
// autoplayValue sets the value to either a 0 or 1 where the video attribute includes 'autoplay=1'
// gets the source of the url, .split('&autoplay=')[0]: Takes the URL and removes everything after '&autoplay='
// after which the video source url is updated (see; 1)

