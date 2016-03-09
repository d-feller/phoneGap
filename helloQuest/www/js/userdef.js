function openDeviceBrowser (externalLinkToOpen){
  window.open(externalLinkToOpen, '_system', 'location=no');
}

$(document).ready(function(){
  $("#testInapp").click(function(){
    var win = window.open( "http://www.questfox.de", "_blank");
  });
});
