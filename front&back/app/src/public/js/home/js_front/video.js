var myVideoStream = document.getElementById('myVideo')     // make it a global variable
var myVideoStream2 = document.getElementById('myVideo2')

function getVideo(){
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({video: true, audio: false},
    
    function(stream) {
        myVideoStream.srcObject = stream   
        myVideoStream.play();
        myVideoStream2.srcObject = stream   
        myVideoStream2.play();
    }, 
    
    function(error) {
        alert('webcam not working');
    });
}

getVideo();

