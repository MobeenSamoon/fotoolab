function clicking(smallImg) {
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src;
  }
  function downloadDivContent() {
    const divContent = document.getElementById("contant").outerHTML;
  
    const blob = new Blob([divContent], { type: "text/html" });
  
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
  
    link.download = "Product-Description.html";
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }