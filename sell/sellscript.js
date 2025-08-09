document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    
    fetch("upload.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("response").innerText = data;
        // You can add more actions after successful submission
    })
    .catch(error => console.error('Error:', error));
});
