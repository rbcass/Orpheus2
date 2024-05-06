
//Taking a screenshot of the staff using html2canvas
const downloadButtonP = document.querySelector('.button-download-print');
const midiVisualizer = document.querySelector('#myStaffVisualizerB');

downloadButtonP.addEventListener('click', () => {
  html2canvas(midiVisualizer, {
    useCORS: true, 
    allowTaint: true, 
    scrollX: -window.scrollX, 
    scrollY: -window.scrollY  
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imgData;
    downloadLink.download = "sheet.png";
    downloadLink.click();
  });
});