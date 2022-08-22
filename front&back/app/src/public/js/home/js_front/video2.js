var myVideoStream2 = document.getElementById('myVideo2')     // make it a global variable

function getVideo2(){
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({video: true, audio: false},
    
        function(stream) {
            myVideoStream2.srcObject = stream   
            myVideoStream2.play();
    }, 
    
        function(error) {
            alert('webcam not working');
    });
}

getVideo2();