document.getElementById('unblockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    const webFrame = document.getElementById('webFrame');
    webFrame.src = url;
    webFrame.style.display = 'block';
});
