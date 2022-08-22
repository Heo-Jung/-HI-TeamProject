var myVideoStream1 = document.getElementById('myVideo1')     // make it a global variable

function getVideo1(){
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({video: true, audio: false},
    
        function(stream) {
            myVideoStream1.srcObject = stream   
            myVideoStream1.play();
    }, 
    
        function(error) {
            alert('webcam not working');
    });
}

getVideo1();