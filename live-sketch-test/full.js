var c = {video: true};
document.addEventListener("DOMContentLoaded", function()
{
navigator.mediaDevices.getUserMedia(c).then(handleSuccess);
});

function handleSuccess(stream) {
v1.srcObject = stream
v2.srcObject = stream;
};