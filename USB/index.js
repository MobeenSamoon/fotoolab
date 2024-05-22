function downloadDivContent() {
  const divContent = document.getElementById("divToDownload").innerText;
  const tempElement = document.createElement("a");
  tempElement.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(divContent);
  tempElement.download = "div_content.txt";
  document.body.appendChild(tempElement);
  tempElement.click();
  document.body.removeChild(tempElement);
}






function clicking(smallImg) {
  var fullImg = document.getElementById("imagebox");
  fullImg.src = smallImg.src;
}
