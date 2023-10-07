function doGet() {
  var output = HtmlService.createHtmlOutputFromFile("Index");
  return output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
