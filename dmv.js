function scan() {
  console.log('scanning...');
  var divs = document.getElementsByTagName("div");

  for(var i = 0; i < divs.length; i++) {
    if (divs[i].className != 'text-capitalize') continue;

    var buttons = divs[i].getElementsByClassName('btn btn-secondary btn-xs mt-1');
    for(var j = 0; j < buttons.length; j++)  {
      if (buttons[j].id.startsWith('datebtn')) {
        buttons[j].click();
      }
    }

    let parser = new DOMParser();
    let doc = parser.parseFromString(divs[i].innerText, "text/html");
    for (var item of doc.querySelectorAll("span")) {
      if (item.innerText.startsWith("Next Available")) {
        console.log(divs[i].innerText);
      }
    }
  }

  setTimeout(scan, 3000);
}
