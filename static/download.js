const downloadButton = document.querySelector('.button-download');

    downloadButton.addEventListener('click', (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Manual download
        const downloadLink = document.createElement('a');
        downloadLink.href = "./blues.mid"; // what about classical?
        downloadLink.download = "blues.mid";
        downloadLink.click();
    });



